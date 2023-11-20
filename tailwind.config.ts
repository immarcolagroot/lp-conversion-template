import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFF",
      black: "#000",
      primary: "#A335D7",
      gray: "#D9D9D9",
      "black-50": "#00000080",
      "black-75": "#000000bf",
      "gray-50": "#D9D9D980",
    },
  },
  plugins: [],
};
export default config;
