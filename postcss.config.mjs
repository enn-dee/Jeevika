const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.6s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
  },
},

};

export default config;
