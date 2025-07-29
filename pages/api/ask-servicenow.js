


import rateLimiter from '../../lib/rateLimiter';

export default async function handler(req, res) {
  // Set consistent headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      error: 'Method not allowed',
      message: 'Only POST requests are accepted'
    });
  }

  // Check rate limit before processing
  if (!rateLimiter.checkLimit()) {
    const resetTime = rateLimiter.getResetTime();
    return res.status(429).json({
      success: false,
      error: 'Rate Limit Exceeded',
      message: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil(resetTime / 1000) // Time in seconds until reset
    });
  }

  try {
    const { question } = req.body;
    
    if (!question?.trim()) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid input',
        message: 'Question cannot be empty'
      });
    }

    // Check API key is configured
    if (!process.env.GLM_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'Configuration Error',
        message: 'GLM API key is not configured'
      });
    }

    // Prepare the request body for GLM-4.5 API
    const requestBody = {
      model: "glm-4.5",
      messages: [
        {
          role: "system",
          content: `You are a ServiceNow scripting expert with deep knowledge of:
          - GlideRecord queries and operations
          - Business Rules, Client Scripts, and UI Policies
          - Script Includes and Workflow Scripts
          - Service Portal and Widget development
          - Integration and REST/SOAP APIs
          - Best practices for performance and security
          
          Provide clear, concise code examples with explanations when answering questions.`
        },
        {
          role: "user",
          content: question
        }
      ],
      do_sample: true,
      stream: false,
      thinking: {
        type: "enabled"
      },
      temperature: 0.7,
      top_p: 0.7,
      max_tokens: 1000,
      tool_choice: "auto",
      response_format: {
        type: "text"
      }
    };

    // Make request to GLM-4.5 API
    const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GLM_API_KEY}`
      },
      body: JSON.stringify(requestBody)
    });

    // Check for rate limiting from GLM API
    if (response.status === 429) {
      // Try to get retry-after header from GLM
      const retryAfter = response.headers.get('retry-after') || 
                        response.headers.get('x-ratelimit-reset') || 
                        '60'; // Default to 60 seconds
      
      return res.status(429).json({
        success: false,
        error: 'GLM API Rate Limit Exceeded',
        message: 'The GLM API rate limit has been exceeded. Please try again later.',
        retryAfter: parseInt(retryAfter)
      });
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `Request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    // Get current rate limit info from our rate limiter
    const currentRateLimitInfo = rateLimiter.getRateLimitInfo();
    
    return res.status(200).json({ 
      success: true,
      answer: data.choices[0].message.content,
      rateLimitInfo: currentRateLimitInfo
    });
    
  } catch (error) {
    console.error('GLM API Error:', error);
    
    // Handle specific API errors
    if (error.response?.status === 429) {
      const retryAfter = error.response.headers?.['retry-after'] || '60';
      return res.status(429).json({
        success: false,
        error: 'Quota Exceeded',
        message: 'You exceeded your current GLM quota. Please check your plan and billing details.',
        retryAfter: parseInt(retryAfter)
      });
    }
    
    // Generic error response
    return res.status(500).json({
      success: false,
      error: 'Internal Error',
      message: error.message || 'An unexpected error occurred'
    });
  }
}