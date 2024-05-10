import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-green": "#1ED760",
        "app-dark": "#222222",
        "app-white": "#FFFFFF",
        "off-green": "#92C2A3",
        "app-grey": "#7A7983",
        "dark-grey": "#1D3124",
        "btn-green": "#1BB652",
        "bg-hover": "#F1F1F1",
      },
      screens: {
        "phone-mini": "200px",
        "phone-xs": "320px",
        "phone-sm": "375px",
        "phone-md": "400px",
        "phone-lg": "480px",
        maxMd: { raw: "(max-width: 768px)" },
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "desktop-med": "1350px",
        "desktop-wide": "1440px",
        "desktop-2xl": "1536px",
        "desktop-des": "1728px",
      },
    },
  },
  plugins: [],
};
export default config;
