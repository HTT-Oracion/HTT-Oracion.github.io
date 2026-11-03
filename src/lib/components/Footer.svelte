<script lang="ts">
	import { profile } from '$lib/data';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container inner">
		<p>© {year} {profile.name}</p>
		<p class="built">Built with Svelte 5 · 部署于 GitHub Pages</p>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--border);
		padding-block: var(--s-6);
	}

	.inner {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--s-3);
		color: var(--text-3);
		font-size: var(--text-small);
	}

	.built {
		font-family: var(--font-mono);
		font-size: 0.75rem;
	}
</style>
