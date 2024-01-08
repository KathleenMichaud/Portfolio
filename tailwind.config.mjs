/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'purple': '#2f007f',
			'pink': "#f61771",
			'yellow': '#f3b15b',
			'cje': '#dd1e48',
			'moutonrebel':'#8f55d4',
			'flashmonkeys':'#ffbe08',
			'kinorivenord': '#bd2718',
		},
		fontFamily: {
			'sans': ["'Oswald'", "sans-serif"],
			cursive: ['"Caveat"', 'cursive']
		},
		container: {
			padding: '2rem',
			center: true,
			screens: {
				sm: '640px',
				md: '768px',
				lg: '900px',
			},
		},
		extend: {},
	},
	plugins: [],
}
