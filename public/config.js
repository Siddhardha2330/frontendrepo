// Frontend Configuration
const config = {
  // API Base URL - Update this to your Render backend URL
  API_BASE_URL: 'https://backendrepo-ev4f.onrender.com',
  
  // API Endpoints
  endpoints: {
    login: '/api/login',
    signup: '/api/signup',
    logout: '/api/logout',
    health: '/api/health',
    quizzes: '/api/quizzes',
    admin: '/api/admin',
    submissions: '/api/submissions'
  },
  
  // Get full API URL
  getApiUrl: function(endpoint) {
    return this.API_BASE_URL + endpoint;
  },
  
  // Get auth headers
  getAuthHeaders: function() {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    };
  },
  
  // Fetch with timeout
  fetchWithTimeout: function(url, options = {}, timeout = 10000) {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout')), timeout)
      )
    ]);
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}
