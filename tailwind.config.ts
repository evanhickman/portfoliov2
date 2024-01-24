import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: colors.white,
      black: colors.neutral,
      cyan: colors.cyan,
      indigo: colors.indigo,
      purple: colors.fuchsia,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
    },
  },
  plugins: [],
};
export default config;
