// Thanks to https://sbero.dev/blog/add-tailwind-to-hugo-in-2023/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
