module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: () => ({
        'auth-background': "url('assets/images/auth-background.png')",
        'nav-color-gradient':
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))',
        'thumbnail-color-gradient':
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.4))',
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      colors: {
        primary: '#3490dc',
        drawer: '#3490dc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
