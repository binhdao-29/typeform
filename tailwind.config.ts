import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#191919',
        darkGray: '#3d3d3c',
        lightGray: '#5e5e5e',
        extraLightGray: '#c2c2c1',
      },
    },
    screens: {
      xs: '360px',
      md: '720px',
      lg: '1024px',
    },
  },
  plugins: [],
};
export default config;
