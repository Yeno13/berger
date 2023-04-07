/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-pic":
          "url('https://automatisme-pics.s3.eu-west-3.amazonaws.com/photo-portail-automatique.jpg')",
      },
      colors: {
        "came-blue": "#00b0ed",
      },
      spacing: {
        "90": "90%",
      },
      scale: {
        "102": "1.02",
      },
      fontFamily: {
        "dancing-script": ['"Dancing Script"', "cursive"],
      },
      height: {
        "128": "20vw",
      },
    },
  },
  plugins: [],
};
