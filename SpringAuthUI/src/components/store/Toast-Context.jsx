import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random();
    const newToast = { id, message, type };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      removeToast(id);
    }, 4000);
    
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const success = useCallback((message) => {
    return addToast(message, 'success');
  }, [addToast]);

  const error = useCallback((message) => {
    return addToast(message, 'error');
  }, [addToast]);

  const info = useCallback((message) => {
    return addToast(message, 'info');
  }, [addToast]);

  const warning = useCallback((message) => {
    return addToast(message, 'warning');
  }, [addToast]);

  return (
    <ToastContext.Provider value={{ 
      toasts, 
      success, 
      error, 
      info, 
      warning, 
      removeToast 
    }}>
      {children}
    </ToastContext.Provider>
  );
};
