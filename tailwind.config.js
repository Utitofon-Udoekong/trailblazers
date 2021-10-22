module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern-1': "url('./assets/images/carouselimages/carouselimage1.jpg')",
        'hero-pattern-2': "url('./assets/images/carouselimages/carouselimage2.jpg')",
      },
      colors: {
        brand:{
          red: '#F70000'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
