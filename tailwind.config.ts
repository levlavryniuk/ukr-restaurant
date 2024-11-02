import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
      colors: {
        primary: '#bd2e21',
        background: '#ffffff',
        secondaryText: '#606060',
        mainText: '#191919'
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        marck: ['"Marck Script"', 'cursive'],
      },
    }
	},

	plugins: []
} satisfies Config;
