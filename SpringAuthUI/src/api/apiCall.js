import axios from 'axios';

const apiCall = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1',
  headers:{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  
  timeout: 10000,

});

apiCall.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    console.log('API Request to:', config.baseURL + config.url);
    console.log('Token from localStorage:', token); // Debug log
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('Authorization header set:', config.headers.Authorization); // Debug log
    } else {
      console.log('No token found in localStorage'); // Debug log
    }
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
apiCall.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('API Error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      url: error.config?.url
    });
    return Promise.reject(error);
  }
);



export default apiCall;