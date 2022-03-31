module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'hsl(243, 87%, 12%)',
          2: 'hsl(238, 22%, 44%)',
        },

        accent: {
          1: 'hsl(224, 93%, 58%)',
          2: 'hsl(170, 45%, 43%)',
        },

        neutral: {
          1: 'hsl(240, 75%, 98%)',
          2: 'hsl(0, 0%, 75%)',
        },
      },

      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },

      backgroundImage: {
        desktop: 'url("/images/bg-curve-desktop.svg")',
        mobile: 'url("/images/bg-curve-mobile.svg")',
      },
    },
  },
  plugins: [],
}
