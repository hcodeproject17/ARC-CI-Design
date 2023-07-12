/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        
      },
      animation: {
        blink: "blink 0.5s linear infinite",
        fade_up: "fade_up 2s ease forwards",
        fade_up_d2: "fade_up 2s ease 1s forwards",
        icon_translate: "icon_translate 2s ease forwards",
        spin_slow: "spin 15s linear infinite",
        spin_slow_reverse: "spin 15s linear infinite reverse ",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        fade_up: {
          "0%": { opacity: 0, transform: "translateY(50%)" },
          "100%": {
            opacity: 1,
            transform: "translate(0px, 0px)",
          },
        },
        icon_translate: {
          "0%": { transform: "translate(-100vh, 0px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "platinum": "#E0E0E0",
      },
    },
  },
  plugins: [],
};
