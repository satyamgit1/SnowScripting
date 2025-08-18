import { useState, useRef, useEffect } from 'react';
import { 
  FiSend, FiRefreshCw, FiClock, FiCopy, FiCheck, FiAlertCircle, FiInfo, 
  FiSun, FiMoon, FiDownload, FiMic, FiMicOff, FiThumbsUp, FiThumbsDown 
} from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function ServiceNowAIAssistant() {
  // Core state
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [rateLimitInfo, setRateLimitInfo] = useState({ remaining: null, resetTime: null });
  const [retryCountdown, setRetryCountdown] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  
  // Theme state
  const [darkMode, setDarkMode] = useState(true);
  
  // Model settings
  const [selectedModel, setSelectedModel] = useState('glm-4.5');
  const [temperature, setTemperature] = useState(0.7);
  
  // Voice input
  const [isListening, setIsListening] = useState(false);
  
  // Stats
  const [stats, setStats] = useState({
    totalRequests: 0,
    totalTokens: 0,
    todayRequests: 0,
    averageResponseTime: 0
  });
  
  // Refs
  const textareaRef = useRef(null);
  const retryTimerRef = useRef(null);
  const conversationEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize theme
  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  // Load conversation from localStorage
  useEffect(() => {
    const savedConversation = localStorage.getItem('servicenow-ai-conversation');
    if (savedConversation) {
      try {
        setConversation(JSON.parse(savedConversation));
      } catch (e) {
        console.error('Failed to parse saved conversation', e);
      }
    }
  }, []);

  // Save conversation to localStorage
  useEffect(() => {
    if (conversation.length > 0) {
      localStorage.setItem('servicenow-ai-conversation', JSON.stringify(conversation));
    }
  }, [conversation]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        
        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setQuestion(transcript);
          setIsListening(false);
        };
        
        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };
        
        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + Enter to send
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && !isLoading && retryCountdown === 0) {
        if (question.trim()) {
          handleSubmit(new Event('submit'));
        }
      }
      
      // Ctrl/Cmd + K to clear conversation
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        handleReset();
      }
      
      // Escape to focus textarea
      if (e.key === 'Escape') {
        textareaRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [question, isLoading, retryCountdown]);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
    }
  }, [question]);

  // Controlled scroll effect
  useEffect(() => {
    if (shouldScroll && conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
      setShouldScroll(false);
    }
  }, [shouldScroll, conversation]);

  // Handle retry countdown
  useEffect(() => {
    if (retryCountdown > 0) {
      retryTimerRef.current = setTimeout(() => {
        setRetryCountdown(prev => prev - 1);
      }, 1000);
    }

    return () => {
      if (retryTimerRef.current) {
        clearTimeout(retryTimerRef.current);
      }
    };
  }, [retryCountdown]);

  // Reset copied state after delay
  useEffect(() => {
    if (copiedIndex !== null) {
      const timer = setTimeout(() => setCopiedIndex(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedIndex]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim() || isLoading || retryCountdown > 0) return;
    
    setIsLoading(true);
    setError(null);
    setShouldScroll(true);
    
    const userMessage = { role: 'user', content: question };
    setConversation(prev => [...prev, userMessage]);
    setQuestion('');
    
    const startTime = Date.now();
    
    try {
      const response = await fetch('/api/ask-servicenow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          question,
          model: selectedModel,
          temperature
        }),
      });
      
      const responseTime = Date.now() - startTime;
      
      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = {
            error: 'Request failed',
            message: await response.text()
          };
        }
        
        if (response.status === 429) {
          const retryAfter = errorData.retryAfter || 60;
          setRetryCountdown(retryAfter);
          throw new Error(errorData.message || 'Rate limit exceeded');
        }
        
        throw new Error(errorData.message || errorData.error || `Request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Request was not successful');
      }
      
      if (data.rateLimitInfo) {
        setRateLimitInfo(data.rateLimitInfo);
      }
      
      setStats(prev => ({
        totalRequests: prev.totalRequests + 1,
        totalTokens: prev.totalTokens + (data.usage?.total_tokens || 0),
        todayRequests: prev.todayRequests + 1,
        averageResponseTime: prev.averageResponseTime > 0 
          ? (prev.averageResponseTime + responseTime) / 2 
          : responseTime
      }));
      
      const aiMessage = { 
        role: 'ai', 
        content: data.answer,
        feedback: null
      };
      setConversation(prev => [...prev, aiMessage]);
      setShouldScroll(true);
      
    } catch (err) {
      console.error('Submission Error:', err);
      setError({
        message: err.message,
        details: 'Please try again or check your network connection',
        isRateLimit: err.message.includes('Rate limit') || err.message.includes('quota')
      });
      
      setConversation(prev => prev.filter((msg, index) => 
        index !== prev.length - 1 || msg.role !== 'user'
      ));
    } finally {
      setIsLoading(false);
      textareaRef.current?.focus();
    }
  };

  const handleReset = () => {
    setConversation([]);
    setError(null);
    setRateLimitInfo({ remaining: null, resetTime: null });
    setRetryCountdown(0);
    localStorage.removeItem('servicenow-ai-conversation');
  };

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
  };

  const handleFeedback = (index, isPositive) => {
    const feedback = {
      message: conversation[index].content,
      isPositive,
      timestamp: new Date().toISOString()
    };
    
    const savedFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    savedFeedback.push(feedback);
    localStorage.setItem('feedback', JSON.stringify(savedFeedback));
    
    const updatedConversation = [...conversation];
    updatedConversation[index] = {
      ...updatedConversation[index],
      feedback: isPositive ? 'positive' : 'negative'
    };
    setConversation(updatedConversation);
  };

  const exportConversation = () => {
    const exportData = {
      date: new Date().toISOString(),
      conversation: conversation
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `servicenow-ai-conversation-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const formatResetTime = (resetTime) => {
    if (!resetTime) return '';
    const date = new Date(resetTime);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderContent = (content) => {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    
    while ((match = codeBlockRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: content.substring(lastIndex, match.index)
        });
      }
      
      parts.push({
        type: 'code',
        language: match[1] || 'javascript',
        content: match[2]
      });
      
      lastIndex = match.index + match[0].length;
    }
    
    if (lastIndex < content.length) {
      parts.push({
        type: 'text',
        content: content.substring(lastIndex)
      });
    }
    
    return parts.map((part, i) => {
      if (part.type === 'code') {
        return (
          <div key={i} className="my-3">
            <div className="text-xs text-gray-400 mb-1">{part.language}</div>
            <SyntaxHighlighter 
              language={part.language} 
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: '0.5rem',
                fontSize: '0.875rem'
              }}
            >
              {part.content}
            </SyntaxHighlighter>
          </div>
        );
      } else {
        return (
          <span key={i} className="whitespace-pre-wrap">
            {part.content}
          </span>
        );
      }
    });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className={`rounded-xl shadow-2xl p-6 transition-all duration-300 ${
          darkMode 
            ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:shadow-emerald-900/20' 
            : 'bg-white border border-gray-200 hover:shadow-lg'
        }`}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h3 className={`text-2xl font-bold flex items-center gap-2 ${
                darkMode ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                <span className={`p-2 rounded-lg ${
                  darkMode ? 'bg-emerald-900/30' : 'bg-emerald-100'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                ServiceNow Scripting Assistant
              </h3>
              <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Get expert help with your ServiceNow development
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-gray-800/60 hover:bg-gray-700/60 text-gray-300' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>
              
              {rateLimitInfo.remaining !== null && (
                <div className={`text-sm px-3 py-2 rounded-lg border flex items-center gap-1 ${
                  darkMode 
                    ? 'bg-gray-800/60 border-gray-700 text-gray-300' 
                    : 'bg-gray-100 border-gray-200 text-gray-700'
                }`}>
                  <FiClock className={darkMode ? "text-emerald-400" : "text-emerald-600"} />
                  <span>{rateLimitInfo.remaining} requests left</span>
                  {rateLimitInfo.resetTime && (
                    <span className={`text-xs ml-1 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                      (resets at {formatResetTime(rateLimitInfo.resetTime)})
                    </span>
                  )}
                </div>
              )}
              
              <button
                onClick={exportConversation}
                disabled={conversation.length === 0}
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg border disabled:opacity-50 transition-colors ${
                  darkMode 
                    ? 'bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-emerald-400 border-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-emerald-600 border-gray-200'
                }`}
              >
                <FiDownload /> Export
              </button>
              
              <button
                onClick={handleReset}
                disabled={conversation.length === 0 && !error}
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg border disabled:opacity-50 transition-colors ${
                  darkMode 
                    ? 'bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-emerald-400 border-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-emerald-600 border-gray-200'
                }`}
              >
                <FiRefreshCw /> Reset
              </button>
            </div>
          </div>
          
          <div className={`mb-6 p-4 rounded-lg ${
            darkMode ? 'bg-gray-800/40 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  darkMode ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  Model
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    darkMode 
                      ? 'bg-gray-800/60 border border-gray-700 text-gray-200' 
                      : 'bg-white border border-gray-300 text-gray-700'
                  }`}
                >
                  <option value="glm-4.5">GLM-4.5 (Recommended)</option>
                  <option value="glm-4">GLM-4</option>
                  <option value="glm-3-turbo">GLM-3 Turbo</option>
                </select>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <label className={`text-sm font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                    Creativity
                  </label>
                  <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                    {temperature.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className={`flex justify-between text-xs mt-1 ${
                  darkMode ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  <span>Precise</span>
                  <span>Balanced</span>
                  <span>Creative</span>
                </div>
              </div>
            </div>
          </div>
          
          {retryCountdown > 0 && (
            <div className={`mb-4 p-4 rounded-lg flex items-start gap-3 animate-pulse ${
              darkMode ? 'bg-amber-900/20 border border-amber-700/50' : 'bg-amber-50 border border-amber-200'
            }`}>
              <FiAlertCircle className={`mt-0.5 flex-shrink-0 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
              <div>
                <div className={`font-medium ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>
                  Rate Limit Reached
                </div>
                <div className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  You've reached the request limit. Please wait 
                  <span className={`font-mono px-1.5 py-0.5 rounded mx-1 ${
                    darkMode ? 'bg-amber-900/40' : 'bg-amber-100'
                  }`}>
                    {retryCountdown}s
                  </span>
                  before trying again.
                </div>
              </div>
            </div>
          )}
          
          {error && (
            <div className={`mb-4 p-4 rounded-lg flex items-start gap-3 ${
              error.isRateLimit 
                ? (darkMode ? 'bg-amber-900/20 border border-amber-700/50' : 'bg-amber-50 border border-amber-200')
                : (darkMode ? 'bg-red-900/20 border border-red-700/50' : 'bg-red-50 border border-red-200')
            }`}>
              <FiAlertCircle className={`mt-0.5 flex-shrink-0 ${
                error.isRateLimit 
                  ? (darkMode ? 'text-amber-400' : 'text-amber-600')
                  : (darkMode ? 'text-red-400' : 'text-red-600')
              }`} />
              <div>
                <div className={`font-medium ${
                  error.isRateLimit 
                    ? (darkMode ? 'text-amber-400' : 'text-amber-700')
                    : (darkMode ? 'text-red-400' : 'text-red-700')
                }`}>
                  {error.message}
                </div>
                {error.details && (
                  <div className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {error.details}
                  </div>
                )}
              </div>
            </div>
          )}
          
          <div 
            className={`mb-6 space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin ${
              darkMode ? 'scrollbar-thumb-gray-700 scrollbar-track-gray-800/50' : 'scrollbar-thumb-gray-300 scrollbar-track-gray-100'
            } rounded-lg`}
          >
            {conversation.length === 0 && (
              <div className="text-center py-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  darkMode ? 'bg-emerald-900/20' : 'bg-emerald-100'
                }`}>
                  <FiInfo className={`text-2xl ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                </div>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Ask any ServiceNow scripting question to get started
                </div>
                <div className={`text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  Examples: "How do I query records with GlideRecord?", "Business Rule best practices"
                </div>
              </div>
            )}
            
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  msg.role === 'user'
                    ? (darkMode 
                      ? 'bg-gray-700/40 border border-gray-600/50 ml-8' 
                      : 'bg-gray-100 border border-gray-200 ml-8')
                    : (darkMode 
                      ? 'bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-700/30 mr-8' 
                      : 'bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 mr-8')
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.role === 'user' 
                        ? (darkMode ? 'bg-gray-600' : 'bg-gray-300')
                        : (darkMode ? 'bg-emerald-800/50' : 'bg-emerald-200')
                    }`}>
                      {msg.role === 'user' ? (
                        <span className={`text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>U</span>
                      ) : (
                        <span className={`text-sm font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>AI</span>
                      )}
                    </div>
                    <div className={`font-semibold ${
                      msg.role === 'user' 
                        ? (darkMode ? 'text-gray-300' : 'text-gray-700')
                        : (darkMode ? 'text-emerald-400' : 'text-emerald-600')
                    }`}>
                      {msg.role === 'user' ? 'You' : 'ServiceNow Assistant'}
                    </div>
                  </div>
                  
                  {msg.role === 'ai' && (
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleCopy(msg.content, index)}
                        className={`p-1 rounded transition-colors ${
                          darkMode ? 'text-gray-500 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-600'
                        }`}
                        title="Copy response"
                      >
                        {copiedIndex === index ? (
                          <FiCheck className={darkMode ? "text-emerald-400" : "text-emerald-600"} />
                        ) : (
                          <FiCopy />
                        )}
                      </button>
                      
                      <button
                        onClick={() => handleFeedback(index, true)}
                        className={`p-1 rounded transition-colors ${
                          msg.feedback === 'positive' 
                            ? (darkMode ? 'text-emerald-400' : 'text-emerald-600')
                            : (darkMode ? 'text-gray-500 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-600')
                        }`}
                        title="Good response"
                      >
                        <FiThumbsUp />
                      </button>
                      
                      <button
                        onClick={() => handleFeedback(index, false)}
                        className={`p-1 rounded transition-colors ${
                          msg.feedback === 'negative' 
                            ? (darkMode ? 'text-red-400' : 'text-red-600')
                            : (darkMode ? 'text-gray-500 hover:text-red-400' : 'text-gray-500 hover:text-red-600')
                        }`}
                        title="Poor response"
                      >
                        <FiThumbsDown />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className={`whitespace-pre-wrap pl-10 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {renderContent(msg.content)}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className={`p-4 rounded-xl mr-8 ${
                darkMode 
                  ? 'bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-700/30' 
                  : 'bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-emerald-800/50' : 'bg-emerald-200'
                  }`}>
                    <span className={`text-sm font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>AI</span>
                  </div>
                  <div className={`font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    ServiceNow Assistant
                  </div>
                  <div className={`h-2 w-2 rounded-full animate-pulse ${
                    darkMode ? 'bg-emerald-400' : 'bg-emerald-600'
                  }`}></div>
                </div>
                <div className={`pl-10 flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                  Generating response...
                </div>
              </div>
            )}
            <div ref={conversationEndRef} />
          </div>
          
          <div className={`mb-6 p-4 rounded-lg ${
            darkMode ? 'bg-gray-800/40 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          }`}>
            <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Usage Statistics
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div>
                <div className={darkMode ? 'text-gray-500' : 'text-gray-600'}>Total Requests</div>
                <div className={`font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  {stats.totalRequests}
                </div>
              </div>
              <div>
                <div className={darkMode ? 'text-gray-500' : 'text-gray-600'}>Today</div>
                <div className={`font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  {stats.todayRequests}
                </div>
              </div>
              <div>
                <div className={darkMode ? 'text-gray-500' : 'text-gray-600'}>Tokens Used</div>
                <div className={`font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  {stats.totalTokens}
                </div>
              </div>
              <div>
                <div className={darkMode ? 'text-gray-500' : 'text-gray-600'}>Avg Response</div>
                <div className={`font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  {stats.averageResponseTime.toFixed(0)}ms
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <textarea
                  ref={textareaRef}
                  rows="1"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-800/60 border border-gray-700 text-gray-100' 
                      : 'bg-white border border-gray-300 text-gray-800'
                  }`}
                  placeholder="Ask about GlideRecord, Business Rules, Client Scripts..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  disabled={isLoading || retryCountdown > 0}
                  required
                />
                <div className={`absolute bottom-2 right-2 text-xs ${
                  darkMode ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {question.length}/500
                </div>
              </div>
              
              <button
                type="button"
                onClick={toggleListening}
                disabled={isLoading || retryCountdown > 0}
                className={`self-end px-3 py-3 rounded-lg transition-all duration-200 ${
                  isListening 
                    ? 'bg-red-600 text-white animate-pulse' 
                    : (darkMode 
                      ? 'bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 disabled:opacity-50' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50')
                }`}
              >
                {isListening ? <FiMicOff /> : <FiMic />}
              </button>
              
              <button
                type="submit"
                disabled={isLoading || !question.trim() || retryCountdown > 0}
                className={`self-end px-4 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all duration-200 shadow-lg ${
                  darkMode 
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-900/30' 
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-emerald-900/20'
                }`}
              >
                {isLoading ? (
                  <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                ) : (
                  <>
                    <FiSend /> Send
                  </>
                )}
              </button>
            </div>
          </form>
          
          <div className={`mt-4 text-center text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Powered by GLM-4.5 • Responses may contain inaccuracies • 
            <span className="ml-1">Keyboard shortcuts: Ctrl+Enter to send, Ctrl+K to reset, Esc to focus</span>
          </div>
        </div>
      </div>
    </div>
  );
}