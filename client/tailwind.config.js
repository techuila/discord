/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				default: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#5865F2'
				}
			}
		]
	}
};
