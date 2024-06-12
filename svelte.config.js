import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import adapter from '@sveltejs/adapter-cloudflare';
// import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsx } from 'mdsx';
import { mdsxConfig } from './mdsx.config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		mdsx(mdsxConfig),
		vitePreprocess({
			style: {
				css: {
					postcss: join(__dirname, 'postcss.config.cjs'),
				},
			},
		}),
	],
	extensions: ['.svelte', '.md'],

	kit: {
		// https://kit.svelte.dev/docs/adapter-cloudflare#options
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
			routes: {
				// Since we have so many static assets, we'll manually define
				// the globs for them to save our 100 include/exclude limit
				exclude: [
					'<build>',
					// prerendered content
					'/docs/*',
					'/discover/*',
					'/blocks/*',
					'/blocks.html',
					'/docs.html',
					// static
					'/registry/*',
					'/fonts/*',
					'/avatars/*',
					'/images/*',
					'/android-chrome-192x192.png',
					'/android-chrome-512x512.png',
					'/apple-touch-icon.png',
					'/favicon-16x16.png',
					'/favicon-32x32.png',
					'/favicon.ico',
					'/og.png',
					'/schema.json',
					'/site.webmanifest',
				],
			},
		}),
		prerender: {
			handleMissingId: (details) => {
				if (details.id === '#') return;
				console.warn(details.message);
			},
			// 这里定义 handleHttpError
			handleHttpError: ({ status, path, referrer, referenceType, message }) => {
				// 根据需要处理错误
				// 例如，可以选择忽略特定的错误，或者打印警告，或者让构建失败
				if (status === 404 || status === 500) {
					// 忽略404错误
					console.warn(`Page not found: ${path}`, message);
				} else {
					// 其他情况下，让构建失败
					console.warn(`Page prerender error ${status}: ${path}`, message);

					// throw new Error(message);
				}
			},
		},
	},
};

export default config;
