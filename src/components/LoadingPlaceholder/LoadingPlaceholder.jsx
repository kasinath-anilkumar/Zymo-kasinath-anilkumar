import React from 'react';

const LoadingPlaceholder = ({ height = '200px' }) => {
  return (
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
        color: '#aaa',
        // Improved accessibility:
        outline: 'none',
        border: 'none',
      }}
    >
      <span role="status">Loading...</span>
    </div>
  );
};

export default LoadingPlaceholder;