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
        primary: "var(--primary)",
        primaryhover: "var(--primaryhover)",
        heading: "var(--heading)",
        text: "var(--text)",
        info: "var(--info)",
        border: "var(--border)",
        background: "var(--background)",
        //----
        button: "var(--button)",
        buttontext: "var(--buttontext)",
        backgreen: "var(--backgreen)",
        backblue: "var(--backblue)",
        body: "var(--body)",
        main: "var(--main)",
        tablehead: "var(--tablehead)",
        tableborder: "var(--tableborder)",
        tablerow: "var(--column)",
        mainborder: "var(--mainborder)",
        codebg: "var(--codebg)",
        codetext: "var(--codetext)",
        dots: "var(--dots)",
        card: "var(--card)",
        cardtext: "var(--cardtext)",
        navbar: "var(--navbar)",
        spotlight: "var(--spotlight)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}