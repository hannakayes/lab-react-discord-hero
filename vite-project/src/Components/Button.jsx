// src/components/Button.jsx
import React from 'react';

function Button({ text, isPrimary }) {
  return (
    <button className={`button ${isPrimary ? 'primary' : 'secondary'}`}>
      {text}
    </button>
  );
}

export default Button;
