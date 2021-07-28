module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['"Playfair Display"', "serif"],
      sans: ['"Libre Franklin"', "sans-serif"],
      serif: ["Newsreader", "serif"],
      heading: ['"Cormorant Garamond"', "serif"],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // color: theme("colors.red.600"),
            fontFamily: theme("fontFamily.serif").join(","),
            h1: {
              fontFamily: theme("fontFamily.display").join(","),
              color: "transparent",
              backgroundImage:
                "linear-gradient(to bottom right, var(--tw-gradient-stops))",
              backgroundClip: "text",
            },
            h2: {
              fontFamily: theme("fontFamily.heading").join(","),
              color: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
