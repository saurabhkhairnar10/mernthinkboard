// tailwind.config.js
import { defineConfig } from 'vite';
import daisyui from 'daisyui';

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this to your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
        },
        cupcake: {
          ...require("daisyui/src/colors/themes")["[data-theme=cupcake]"],
        },
      },
    ],
    darkTheme: "dark", // optional: default dark mode theme
  },
}
