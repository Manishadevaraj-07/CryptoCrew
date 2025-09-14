module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20'
        },
        secondary: {
          DEFAULT: '#FF9800',
          light: '#FFB74D',
          dark: '#F57C00'
        },
        accent: '#1565C0'
      }
    },
  },
  plugins: [],
}