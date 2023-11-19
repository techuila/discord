import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		sourcemap: true // Source map generation must be turned on
	},
	plugins: [
		react(),
		...(process.env.SENTRY_AUTH_TOKEN
			? [
					sentryVitePlugin({
						org: 'aliteo',
						project: 'javascript-react',
						authToken: process.env.SENTRY_AUTH_TOKEN,
						sourcemaps: {
							assets: './dist/**'
						}
					})
			  ]
			: [])
	],
	define: {
		__APP_SESSION__: (Math.random() * 100000).toString()
	}
});
