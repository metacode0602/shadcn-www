import { sveltekit } from "@sveltejs/kit/vite";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
	server: {
		port: 5171,
		host: '0.0.0.0'
	},
	preview: {
		port: 8103,
		host: '0.0.0.0'
	},
});
