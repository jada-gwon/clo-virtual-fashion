import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';
import tailwindcss from 'tailwindcss';

export default {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    postcssNested,
  ],
};
