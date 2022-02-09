module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: () => ({
        'auth-background': "url('assets/images/auth-background.png')",
        'color-gradient':  "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
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
