/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        button: "var(--button)",
        buttonhover: "var(--buttonhover)",
        backgreen: "var(--backgreen)",
        backblue: "var(--backblue)",
        body: "var(--body)",
        main: "var(--main)",
        border: "var(--border)",
        dots: "var(--dots)",
        card: "var(--card)",
        cardtext: "var(--cardtext)",
        spotlight: "var(--spotlight)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}