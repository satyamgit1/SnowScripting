// lib/rateLimiter.js
class RateLimiter {
  constructor(maxRequests = 5, windowMs = 60 * 1000) {
    this.maxRequests = maxRequests; // Max requests per window
    this.windowMs = windowMs; // Time window in milliseconds
    this.requests = []; // Array to store request timestamps
  }

  // Check if the request is allowed
  checkLimit() {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    // Remove old requests outside the current window
    this.requests = this.requests.filter(timestamp => timestamp > windowStart);
    
    // Check if we're at the limit
    if (this.requests.length >= this.maxRequests) {
      return false;
    }
    
    // Add current request timestamp
    this.requests.push(now);
    return true;
  }

  // Get time until next available request slot
  getResetTime() {
    if (this.requests.length === 0) return 0;
    
    const oldestRequest = Math.min(...this.requests);
    const resetTime = oldestRequest + this.windowMs;
    const now = Date.now();
    
    return Math.max(0, resetTime - now);
  }

  // Get current rate limit info
  getRateLimitInfo() {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    // Remove old requests outside the current window
    this.requests = this.requests.filter(timestamp => timestamp > windowStart);
    
    const remaining = Math.max(0, this.maxRequests - this.requests.length);
    const resetTime = this.requests.length > 0 
      ? Math.min(...this.requests) + this.windowMs 
      : now + this.windowMs;
    
    return {
      remaining,
      resetTime: new Date(resetTime).toISOString()
    };
  }
}

// Create a singleton instance
const rateLimiter = new RateLimiter(5, 60 * 1000); // 5 requests per minute

export default rateLimiter;