import { defineConfig } from "vite";

// Dev-server only. There is no build step: GitHub Pages serves index.html and the
// assets/ images/ resume/ folders straight from the repo root, so nothing here may
// rewrite files on disk. `npm run dev` just adds live reload on top of them.
export default defineConfig({
	root: ".",
	server: {
		port: 5173,
		open: true,
	},
});
