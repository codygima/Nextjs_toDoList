import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fda4af",

          secondary: "#4b5563",

          accent: "#d6d3d1",

          neutral: "#78716c",

          "base-100": "#80abea",

          info: "#fee2e2",

          success: "#2DC700",

          warning: "#ECEC00",

          error: "#C00808",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

export default config;
