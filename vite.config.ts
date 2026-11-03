import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// 显式声明 $lib 别名(sync 会据此生成 tsconfig paths)
			alias: {
				'$lib': 'src/lib',
				'$lib/*': 'src/lib/*'
			},

			// GitHub Pages <user>.github.io 部署在根路径,无需设置 paths.base
			adapter: adapter({
				strict: true
			})
		})
	]
});
