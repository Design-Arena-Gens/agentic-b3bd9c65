/**** @type {import('tailwindcss').Config} ****/
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          saffron: "#FF9933",
          white: "#FFFFFF",
          green: "#138808",
          blue: "#0A2540",
        },
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(1200px 600px at 20% -10%, rgba(255,153,51,0.25), transparent), radial-gradient(1000px 500px at 80% 10%, rgba(19,136,8,0.22), transparent), radial-gradient(800px 400px at 50% 100%, rgba(10,37,64,0.35), transparent)",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10,37,64,0.12)",
      },
    },
  },
  plugins: [],
};
