<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
	import { profile } from '$lib/data';

	const nav = [
		{ id: 'about', label: '关于' },
		{ id: 'skills', label: '技能' },
		{ id: 'projects', label: '项目' },
		{ id: 'contact', label: '联系' }
	];

	let active = $state('');

	$effect(() => {
		const sections = nav
			.map((n) => document.getElementById(n.id))
			.filter((el): el is HTMLElement => el !== null);

		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			// 顶部 40% 命中即视为当前区块
			{ rootMargin: '-40% 0px -55% 0px' }
		);

		sections.forEach((s) => io.observe(s));
		return () => io.disconnect();
	});
</script>

<header class="header">
	<div class="container inner">
		<a href="#top" class="brand" aria-label="回到顶部">
			<span class="mark" aria-hidden="true">{profile.name.slice(0, 2)}</span>
			<span class="name">{profile.name}</span>
		</a>

		<nav class="nav" aria-label="页面导航">
			{#each nav as item (item.id)}
				<a
					href="#{item.id}"
					class="nav-link"
					class:active={active === item.id}
					aria-current={active === item.id ? 'true' : undefined}
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<ThemeToggle />
	</div>
</header>

<style>
	.header {
		position: fixed;
		inset: 0 0 auto;
		height: var(--header-h);
		z-index: 50;
		background: color-mix(in srgb, var(--bg) 82%, transparent);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border);
	}

	.inner {
		height: 100%;
		display: flex;
		align-items: center;
		gap: var(--s-5);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: var(--s-3);
		margin-right: auto;
	}

	.mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		border-radius: var(--radius-chip);
		background: var(--accent);
		color: var(--accent-ink);
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 0.8125rem;
	}

	.name {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: 0.9375rem;
		letter-spacing: 0.01em;
	}

	.nav {
		display: flex;
		gap: var(--s-2);
	}

	.nav-link {
		padding: var(--s-2) var(--s-3);
		border-radius: var(--radius-chip);
		font-size: var(--text-small);
		color: var(--text-2);
		transition:
			color var(--dur-fast) var(--ease),
			background var(--dur-fast) var(--ease);
	}

	.nav-link:hover {
		color: var(--text);
	}

	.nav-link.active {
		color: var(--text);
		background: var(--accent-soft);
	}

	@media (max-width: 640px) {
		/* 单页滚动,移动端让位给内容 */
		.nav {
			display: none;
		}
	}
</style>
