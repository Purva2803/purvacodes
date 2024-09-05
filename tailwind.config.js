// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Poppins"', 'sans-serif'],
      },
      fontSize: {
        'custom-lg': '1.125rem', // Custom font size (18px)
      },
      lineHeight: {
        'custom-lg': '1.75rem', // Custom line height
      },
    },
  },
  plugins: [],
}
