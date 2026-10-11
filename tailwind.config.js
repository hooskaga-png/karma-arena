const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf9ff',
          100: '#d9f3ff',
          200: '#bfeaff',
          300: '#90dff3',
          400: '#5ec7ea',
          500: '#35a8d6',
          600: '#1f8eb2',
          700: '#1a6d8f',
          800: '#1a5a74',
          900: '#132f41',
        },
        accent: {
          gold: '#f4c76c',
          navy: '#10263f',
          ice: '#eef7fb',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(17, 43, 66, 0.08)',
      },
    },
  },
  plugins: [],
};

module.exports = config;
