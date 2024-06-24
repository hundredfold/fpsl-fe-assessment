// Question 4:
// Customize the Tailwind configuration to include a new color scheme and font,
// then use these custom styles in a component.

//tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: [],
  plugins: [],
  }



// React Component:

import React from 'react';

function CustomButton({ children }) {
  return (
    <button>
      {children}
    </button>
  );
}

export default CustomButton;