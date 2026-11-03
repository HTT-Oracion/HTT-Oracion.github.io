<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Project } from '$lib/data';

	let { project, flip = false }: { project: Project; flip?: boolean } = $props();

	/* 当前展示图(主图 + gallery),切换时骨架屏兜底 */
	const images = $derived([project.cover, ...(project.gallery ?? [])]);
	let active = $state(0);
	let loaded = $state<Record<number, boolean>>({});

	const current = $derived(images[Math.min(active, images.length - 1)]!);

	function markLoaded() {
		loaded[active] = true;
	}
</script>

<article class="project" class:flip data-reveal use:reveal>
	<!-- 截图区:主图可切换 -->
	<figure class="media card">
		<div class="frame" style="aspect-ratio: {current.width} / {current.height};">
			{#if !loaded[active]}
				<div class="skeleton" aria-hidden="true"></div>
			{/if}
			<img
				src={current.src}
				alt={current.alt}
				width={current.width}
				height={current.height}
				loading="lazy"
				onload={markLoaded}
				class:ready={loaded[active]}
			/>
		</div>

		{#if images.length > 1}
			<figcaption class="thumbs">
				{#each images as img, i (img.src)}
					<button
						type="button"
						class="thumb"
						class:current={i === active}
						onclick={() => (active = i)}
						aria-label={'查看第 ' + (i + 1) + ' 张:' + img.alt}
						aria-pressed={i === active}
					>
						<img src={img.src} alt="" width={96} height={60} loading="lazy" />
					</button>
				{/each}
			</figcaption>
		{/if}
	</figure>

	<!-- 文案区 -->
	<div class="body">
		<p class="meta tnum">{project.period} · {project.role}</p>
		<h3 class="name">{project.name}</h3>
		<p class="subtitle">{project.subtitle}</p>
		<p class="desc">{project.description}</p>

		<ul class="highlights">
			{#each project.highlights as h (h.title)}
				<li>
					<span class="h-title">{h.title}</span>
					<span class="h-detail">{h.detail}</span>
				</li>
			{/each}
		</ul>

		<div class="foot">
			<ul class="stack" aria-label="技术栈">
				{#each project.stack as tech (tech)}
					<li>{tech}</li>
				{/each}
			</ul>
			{#if project.link}
				<a class="link" href={project.link.url} target="_blank" rel="noopener noreferrer">
					{project.link.label}
					<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M7 17 17 7M7 7h10v10" />
					</svg>
				</a>
			{/if}
		</div>

		{#if project.note}
			<p class="note">{project.note}</p>
		{/if}
	</div>
</article>

<style>
	.project {
		display: grid;
		grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
		gap: var(--s-7);
		align-items: start;
	}

	/* 偶数项左右翻转,打破等距节奏 */
	.project.flip :global(.media) {
		order: 2;
	}

	.project.flip :global(.body) {
		order: 1;
	}

	.media {
		margin: 0;
		overflow: hidden;
		position: relative;
		box-shadow: var(--shadow-1);
	}

	.frame {
		position: relative;
		width: 100%;
	}

	.frame img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity var(--dur) var(--ease);
	}

	.frame img.ready {
		opacity: 1;
	}

	.skeleton {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			100deg,
			var(--surface-2) 40%,
			var(--surface) 50%,
			var(--surface-2) 60%
		);
		background-size: 200% 100%;
		animation: shimmer 1.4s ease-in-out infinite;
	}

	@keyframes shimmer {
		to {
			background-position: -200% 0;
		}
	}

	.thumbs {
		display: flex;
		gap: var(--s-2);
		padding: var(--s-2);
		border-top: 1px solid var(--border);
	}

	.thumb {
		flex: 1;
		border-radius: var(--radius-chip);
		overflow: hidden;
		opacity: 0.45;
		border: 1px solid transparent;
		transition:
			opacity var(--dur-fast) var(--ease),
			border-color var(--dur-fast) var(--ease);
	}

	.thumb:hover {
		opacity: 0.8;
	}

	.thumb:active {
		transform: scale(0.97);
	}

	.thumb.current {
		opacity: 1;
		border-color: var(--accent);
	}

	.thumb img {
		display: block;
		width: 100%;
		height: auto;
	}

	.meta {
		font-family: var(--font-mono);
		font-size: var(--text-label);
		letter-spacing: 0.05em;
		color: var(--text-3);
		margin: 0 0 var(--s-3);
	}

	.name {
		font-size: clamp(1.375rem, 2.5vw, 1.75rem);
		letter-spacing: -0.01em;
	}

	.subtitle {
		color: var(--accent);
		font-size: var(--text-small);
		font-weight: 500;
		margin-top: var(--s-1);
	}

	.desc {
		color: var(--text-2);
		font-size: 0.9375rem;
		line-height: 1.8;
		margin-top: var(--s-4);
	}

	.highlights {
		list-style: none;
		margin: var(--s-5) 0 0;
		padding: var(--s-5) 0 0;
		border-top: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		gap: var(--s-4);
	}

	.highlights li {
		display: flex;
		flex-direction: column;
		gap: var(--s-1);
	}

	.h-title {
		font-weight: 600;
		font-size: 0.9375rem;
	}

	.h-title::before {
		content: '▸ ';
		color: var(--accent);
	}

	.h-detail {
		color: var(--text-2);
		font-size: var(--text-small);
		line-height: 1.75;
	}

	.foot {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--s-4);
		margin-top: var(--s-5);
	}

	.stack {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: var(--s-2);
		margin-right: auto;
	}

	.stack li {
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		letter-spacing: 0.02em;
		padding: 3px var(--s-2);
		border-radius: var(--radius-chip);
		background: var(--surface-2);
		color: var(--text-2);
	}

	.link {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		font-size: var(--text-small);
		font-weight: 500;
		color: var(--accent);
	}

	.link:hover {
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.note {
		margin-top: var(--s-4);
		font-size: 0.8125rem;
		color: var(--text-3);
	}

	@media (max-width: 900px) {
		.project {
			grid-template-columns: 1fr;
			gap: var(--s-5);
		}

		.project :global(.media),
		.project :global(.body) {
			order: 0 !important;
		}
	}
</style>
