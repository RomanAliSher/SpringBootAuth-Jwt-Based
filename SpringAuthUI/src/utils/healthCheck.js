import apiCall from '../api/apiCall';

// Simple health check utility
export const checkBackendHealth = async () => {
  try {
    const response = await apiCall.get('/health');
    console.log('Backend health check passed:', response.data);
    return true;
  } catch (error) {
    console.warn('Backend health check failed:', error.message);
    // Try a simple ping to the base URL
    try {
      const baseResponse = await fetch('http://localhost:8080');
      console.log('Base URL accessible, status:', baseResponse.status);
      return false; // Server running but API might not be ready
    } catch (fetchError) {
      console.error('Backend server not accessible:', fetchError.message);
      return false;
    }
  }
};

export default checkBackendHealth;
