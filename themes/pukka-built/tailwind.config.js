// Thanks to https://sbero.dev/blog/add-tailwind-to-hugo-in-2023/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        'base': '#FFF7EB',
        'menu-item': '#FAE9CD',
        'header': '#FFDEAD',
        'h1-color': '#607966',
        'h2-color': '#607966',
        'h3-color': '#607966',
        'p-color': '#545454',
        'link-color': '#F59505',
        'link-color-hover': '#DB8000',
      }
    }
  },
  plugins: [],
};
