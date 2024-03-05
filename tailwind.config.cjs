// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   //content: ["./index.html", "./src/**/*.{js,jsx}"],
//   content: [
//     './index/**/*.{html,js}',
//     './src/**/*.{html,js,jsx}',
//   ],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#00040f",
//         secondary: "#00f6ff",
//         dimWhite: "rgba(255, 255, 255, 0.7)",
//         dimBlue: "rgba(9, 151, 124, 0.1)",
//       },
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//       },
//     },
//     screens: {
//       xs: "480px",
//       ss: "620px",
//       sm: "768px",
//       md: "1060px",
//       lg: "1200px",
//       xl: "1700px",
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    './index/**/*.{html,js}',
    './src/**/*.{html,js,jsx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        ani: 'ani 8s infinite',
      },
      keyframes: {
        ani: {
          '0%': { backgroundPosition: '0%' },
          '50%': { backgroundPosition: '400%' },
          '100%': { backgroundPosition: '0%' },
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      textColor: ['hover', 'focus'],
      backgroundColor: ['hover', 'focus'],
    },
  },
  plugins: [],
};
