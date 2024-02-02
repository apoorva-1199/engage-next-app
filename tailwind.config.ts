const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

// const config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#faf8f7",
          light: "#f1efee",
          dark: "#dcd9d8",
          contrastText: "#292524",
          contrastText2: "#6d6d6d",
          contrastTextLight: "#292524",
          contrastTextLight2: "#6d6d6d",
          contrastTextDark: "#292524",
        },
        secondary: {
          main: "#b45c3d",
          light: "#f7eeeb",
          dark: "#803015",
          contrastText: "#ffffff",
          contrastText2: "#f6e4e0",
          contrastTextLight: "#292524",
          contrastTextDark: "#ffffff",
        },
        background: {
          main: "#faf8f7",
          contrastText: "#292524",
          contrastText2: "#6d6d6d",
          contrastText3: "#aa543a",
        },
        surface: {
          main: "#ffffff",
          contrastText: "#292524",
          contrastText2: "#6d6d6d",
          contrastText3: "#aa543a",
        },
        tertiary: { main: "#faf8f7", contrastText: "#292524" },
        success: {
          main: "#35bb66",
          light: "#e9fbec",
          contrastText: "#ffffff",
          contrastTextLight: "#292524",
          contrastTextLight2: "#28691b",
        },
        error: {
          main: "#e02424",
          light: "#fbe9e9",
          contrastText: "#ffffff",
          contrastTextLight: "#292524",
          contrastTextLight2: "#df2020",
        },
        notification: {
          main: "#f7d537",
          light: "#fdf8e0",
          contrastText: "#473505",
          contrastTextLight: "#292524",
          contrastTextLight2: "#473505",
        },
        grey: {
          "0": "#ffffff",
          "100": "#fafafa",
          "200": "#f5f5f5",
          "300": "#f0f0f0",
          "400": "#dedede",
          "500": "#a9a4a2",
          "600": "#7f7a79",
          "700": "#6b6665",
          "800": "#4b4645",
          "900": "#292524",
        },
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: "2.5rem",
              fontFamily: '"Work Sans","Roboto","Helvetica","Arial",sans-serif',
              fontWeight: "900",
              lineHeight: "1.2",
              letterSpacing: "0em",
            },
            h2: {
              fontSize: "2rem",
              fontFamily: '"Work Sans","Roboto","Helvetica","Arial",sans-serif',
              fontWeight: "900",
              lineHeight: "1.2",
              letterSpacing: "0em",
            },
            h3: {
              fontSize: "1.625rem",
              fontFamily: '"Work Sans","Roboto","Helvetica","Arial",sans-serif',
              fontWeight: "700",
              lineHeight: "1.2",
              letterSpacing: "0em",
            },
            h4: {
              fontSize: "1.5rem",
              fontFamily: '"Work Sans","Roboto","Helvetica","Arial",sans-serif',
              fontWeight: "700",
              lineHeight: "1.2",
              letterSpacing: "0em",
            },
            h5: {
              fontSize: "1.375rem",
              fontFamily: '"Work Sans","Roboto","Helvetica","Arial",sans-serif',
              fontWeight: "600",
              lineHeight: "1.2",
              letterSpacing: "0em",
            },
            h6: {
              fontSize: "1.25rem",
              fontFamily: '"Work Sans","Roboto","Helvetica","Arial",sans-serif',
              fontWeight: "700",
              lineHeight: "1.2",
              letterSpacing: "0em",
            },
            p: {
              fontSize: "1rem",
              fontFamily: '"Work Sans","Roboto","Helvetica","Arial",sans-serif',
              fontWeight: "500",
              lineHeight: "1.4",
              letterSpacing: "0em",
            },
            button: {
              fontSize: "1rem",
              fontFamily: '"Work Sans","Roboto","Helvetica","Arial",sans-serif',
              fontWeight: "500",
              lineHeight: "1.4",
              letterSpacing: "0em",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
