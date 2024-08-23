// Toast.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Toast = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!message) return null;

  return (
    <div style={styles.toast}>
      {message}
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

const styles = {
  toast: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
  },
};

export default Toast;
