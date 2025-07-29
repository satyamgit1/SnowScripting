

import { useState, useRef, useEffect } from 'react';
import { FiSend, FiRefreshCw, FiClock, FiCopy, FiCheck, FiAlertCircle, FiInfo } from 'react-icons/fi';

export default function ServiceNowAIAssistant() {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [rateLimitInfo, setRateLimitInfo] = useState({ remaining: null, resetTime: null });
  const [retryCountdown, setRetryCountdown] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const textareaRef = useRef(null);
  const retryTimerRef = useRef(null);
  const conversationEndRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
    }
  }, [question]);

  // Scroll to bottom of conversation
  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation, isLoading]);

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
    
    // Add user question to conversation immediately
    const userMessage = { role: 'user', content: question };
    setConversation(prev => [...prev, userMessage]);
    setQuestion('');
    
    try {
      const response = await fetch('/api/ask-servicenow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      
      // First check if response is OK
      if (!response.ok) {
        // Try to parse error as JSON, fallback to text
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = {
            error: 'Request failed',
            message: await response.text()
          };
        }
        
        // Handle rate limit errors
        if (response.status === 429) {
          const retryAfter = errorData.retryAfter || 60;
          setRetryCountdown(retryAfter);
          throw new Error(errorData.message || 'Rate limit exceeded');
        }
        
        throw new Error(errorData.message || errorData.error || `Request failed with status ${response.status}`);
      }
      
      // Parse successful response
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Request was not successful');
      }
      
      // Update rate limit info if available
      if (data.rateLimitInfo) {
        console.log('Rate limit info received:', data.rateLimitInfo); // Debug log
        setRateLimitInfo(data.rateLimitInfo);
      }
      
      // Add AI response to conversation
      const aiMessage = { role: 'ai', content: data.answer };
      setConversation(prev => [...prev, aiMessage]);
      
    } catch (err) {
      console.error('Submission Error:', err);
      setError({
        message: err.message,
        details: 'Please try again or check your network connection',
        isRateLimit: err.message.includes('Rate limit') || err.message.includes('quota')
      });
      
      // Remove the last user message if we couldn't get a response
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
  };

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
  };

  const formatResetTime = (resetTime) => {
    if (!resetTime) return '';
    const date = new Date(resetTime);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Debug log to check rate limit info
  useEffect(() => {
    console.log('Current rateLimitInfo:', rateLimitInfo);
  }, [rateLimitInfo]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-2xl p-6 mt-8 max-w-4xl mx-auto transition-all duration-300 hover:shadow-emerald-900/20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
            <span className="bg-emerald-900/30 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            ServiceNow Scripting Assistant
          </h3>
          <p className="text-gray-400 text-sm mt-1">Get expert help with your ServiceNow development</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Rate Limit Info */}
          {rateLimitInfo.remaining !== null && (
            <div className="text-sm bg-gray-800/60 px-3 py-2 rounded-lg border border-gray-700 flex items-center gap-1 text-gray-300">
              <FiClock className="text-emerald-400" />
              <span>{rateLimitInfo.remaining} requests left</span>
              {rateLimitInfo.resetTime && (
                <span className="text-gray-500 text-xs ml-1">
                  (resets at {formatResetTime(rateLimitInfo.resetTime)})
                </span>
              )}
            </div>
          )}
          <button
            onClick={handleReset}
            disabled={conversation.length === 0 && !error}
            className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-emerald-400 rounded-lg border border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <FiRefreshCw /> Reset
          </button>
        </div>
      </div>
      
      {/* Rate Limit Warning */}
      {retryCountdown > 0 && (
        <div className="mb-4 p-4 bg-amber-900/20 border border-amber-700/50 rounded-lg flex items-start gap-3 animate-pulse">
          <FiAlertCircle className="text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-amber-400 font-medium">Rate Limit Reached</div>
            <div className="text-gray-300 text-sm mt-1">
              You've reached the request limit. Please wait <span className="font-mono bg-amber-900/40 px-1.5 py-0.5 rounded">{retryCountdown}s</span> before trying again.
            </div>
          </div>
        </div>
      )}
      
      {/* Error Display */}
      {error && (
        <div className={`mb-4 p-4 rounded-lg flex items-start gap-3 ${
          error.isRateLimit 
            ? 'bg-amber-900/20 border border-amber-700/50' 
            : 'bg-red-900/20 border border-red-700/50'
        }`}>
          <FiAlertCircle className={`mt-0.5 flex-shrink-0 ${
            error.isRateLimit ? 'text-amber-400' : 'text-red-400'
          }`} />
          <div>
            <div className={`font-medium ${
              error.isRateLimit ? 'text-amber-400' : 'text-red-400'
            }`}>
              {error.message}
            </div>
            {error.details && (
              <div className="text-gray-300 text-sm mt-1">{error.details}</div>
            )}
          </div>
        </div>
      )}
      
      {/* Conversation History */}
      <div className="mb-6 space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800/50 rounded-lg">
        {conversation.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-900/20 mb-4">
              <FiInfo className="text-emerald-400 text-2xl" />
            </div>
            <div className="text-gray-400">
              Ask any ServiceNow scripting question to get started
            </div>
            <div className="text-gray-500 text-sm mt-2">
              Examples: "How do I query records with GlideRecord?", "Business Rule best practices"
            </div>
          </div>
        )}
        
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl transition-all duration-300 ${
              msg.role === 'user'
                ? 'bg-gray-700/40 border border-gray-600/50 ml-8'
                : 'bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-700/30 mr-8'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.role === 'user' 
                    ? 'bg-gray-600' 
                    : 'bg-emerald-800/50'
                }`}>
                  {msg.role === 'user' ? (
                    <span className="text-gray-300 text-sm font-bold">U</span>
                  ) : (
                    <span className="text-emerald-400 text-sm font-bold">AI</span>
                  )}
                </div>
                <div className={`font-semibold ${
                  msg.role === 'user' ? 'text-gray-300' : 'text-emerald-400'
                }`}>
                  {msg.role === 'user' ? 'You' : 'ServiceNow Assistant'}
                </div>
              </div>
              
              {msg.role === 'ai' && (
                <button
                  onClick={() => handleCopy(msg.content, index)}
                  className="text-gray-500 hover:text-emerald-400 transition-colors duration-200 p-1 rounded"
                  title="Copy response"
                >
                  {copiedIndex === index ? (
                    <FiCheck className="text-emerald-400" />
                  ) : (
                    <FiCopy />
                  )}
                </button>
              )}
            </div>
            
            <div className="text-gray-200 whitespace-pre-wrap pl-10">
              {msg.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="p-4 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-700/30 rounded-xl mr-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-800/50">
                <span className="text-emerald-400 text-sm font-bold">AI</span>
              </div>
              <div className="font-semibold text-emerald-400">ServiceNow Assistant</div>
              <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-gray-400 pl-10 flex items-center gap-2">
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
              Generating response...
            </div>
          </div>
        )}
        <div ref={conversationEndRef} />
      </div>
      
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              rows="1"
              className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none transition-all duration-200"
              placeholder="Ask about GlideRecord, Business Rules, Client Scripts..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              disabled={isLoading || retryCountdown > 0}
              required
            />
            <div className="absolute bottom-2 right-2 text-xs text-gray-500">
              {question.length}/500
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading || !question.trim() || retryCountdown > 0}
            className="self-end px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all duration-200 shadow-lg shadow-emerald-900/30"
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
      
      <div className="mt-4 text-center text-xs text-gray-500">
        Powered by GLM-4.5 • Responses may contain inaccuracies
      </div>
    </div>
  );
}