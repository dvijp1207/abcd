/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: {
          "100": "#1a2f5a",
          "200": "rgba(26, 47, 90, 0.75)",
        },
        black: "#000",
        lightgray: "#ccc",
        gray: "#888",
        whitesmoke: "#e8eaef",
        yellowgreen: "#7ebc42",
      },
      fontFamily: {
        "roboto-condensed": "'Roboto Condensed'",
      },
      borderRadius: {
        "10xs": "3px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "17xl": "36px",
      xs: "12px",
      mini: "15px",
      sm: "14px",
      "31xl": "50px",
      "3xl": "22px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
