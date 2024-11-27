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
        body: "var(--body)",
        border: "var(--border)",
        codebg: "var(--codebg)",
        codetext: "var(--codetext)",
        info: "var(--info)",
        heading: "var(--heading)",
        main: "var(--main)",
        mainrgb: "var(--mainrgb)",
        navbar: "var(--navbar)",
        primary: "var(--primary)",
        primaryhover: "var(--primaryhover)",
        spotlight: "var(--spotlight)",
        tableborder: "var(--tableborder)",
        tablehead: "var(--tablehead)",
        tablerow: "var(--column)",
        text: "var(--text)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}