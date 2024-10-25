// components/LoadingPlaceholder.jsx
import React from 'react';

const LoadingPlaceholder = ({ height = '200px' }) => (
  <div
    style={{
      width: '100%',
      height,
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      color: '#aaa'
    }}
  >
    Loading...
  </div>
);

export default LoadingPlaceholder;
