// VisuallyHiddenInput.jsx
import React from 'react';

const VisuallyHiddenInput = React.forwardRef(({ type, onChange, multiple }, ref) => {
    return (
        <input
            type={type}
            onChange={onChange}
            ref={ref}
            style={{ position: 'absolute', left: '-9999px' }} 
            multiple={multiple} 
        />
    );
});

export default VisuallyHiddenInput;
