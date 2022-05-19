const plugin = require("tailwindcss/plugin")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        midnightGreen: "#114B5F",
        glowEmerald: "#1A936F",
        greenApple: "#88D498",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn": {
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          padding: ".5rem 1rem",
          borderRadius: "0.25rem",
          border: "2px solid white",
          fontWeight: "600",
          "&:hover": {
            backgroundColor: "#1A936F",
          },
        },
        ".btn-blue": {
          backgroundColor: "#3490dc",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#2779bd",
          },
        },
        ".btn-red": {
          backgroundColor: "#e3342f",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#cc1f1a",
          },
        },
      })
    }),
  ],
}
