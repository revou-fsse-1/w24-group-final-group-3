/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  colors: {
    white: "#FFFFFF",
    "almost-white": "#E0E0E0",
    black: "#0B090C",
    "text-light-grey": "#BDBDBD",
    "very-light-grey": "#828282",

    "light-grey": "#3C393F",
    "medium-grey": "#252329",
    "dark-grey": "#110F12",
    "very-dark-grey": "#120F13",

    red: "#EB5757",
    blue: "#2B80EB",
    "blue-hover": "#2D9CDB",
  },
  fontSize: {
    "body-regular": [
      "18px",
      {
        lineHeight: "25px",
        fontWeight: "400",
      },
    ],
    "body-medium": [
      "18px",
      {
        lineHeight: "25px",
        fontWeight: "500",
      },
    ],
    "body-bold": [
      "18px",
      {
        lineHeight: "25px",
        fontWeight: "700",
      },
    ],

    "input-medium": [
      "14px",
      {
        lineHeight: "25px",
        fontWeight: "500",
      },
    ],

    "modal-medium": [
      "12px",
      {
        lineHeight: "25px",
        fontWeight: "500",
      },
    ],

    "time-small": [
      "14px",
      {
        lineHeight: "25px",
        fontWeight: "500",
      },
    ],
  },
  extend: {
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
    },
  },
};
export const plugins = [];
