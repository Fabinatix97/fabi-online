/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
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
        navbar: "var(--navbar)",
        tablehead: "var(--tablehead)",
        tableborder: "var(--tableborder)",
        tablerow: "var(--column)",
        mainborder: "var(--mainborder)",
        text: "var(--text)",
        info: "var(--info)",
        codebg: "var(--codebg)",
        codetext: "var(--codetext)",
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