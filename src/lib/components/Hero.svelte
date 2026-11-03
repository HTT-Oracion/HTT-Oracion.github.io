<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Profile } from '$lib/data';

	let { profile }: { profile: Profile } = $props();

	/* —— 打字机:打字 80ms/字 → 停留 1400ms → 删除 40ms/字 → 下一个 —— */
	let display = $state('');
	let caretOn = $state(true);

	$effect(() => {
		const keywords = profile.keywords;
		let word = 0;
		let len = 0;
		let phase: 'typing' | 'holding' | 'deleting' = 'typing';
		let timer: ReturnType<typeof setTimeout>;

		const tick = () => {
			const target = keywords[word]!;
			if (phase === 'typing') {
				len++;
				display = target.slice(0, len);
				if (len === target.length) {
					phase = 'holding';
					timer = setTimeout(tick, 1400);
				} else {
					timer = setTimeout(tick, 80);
				}
			} else if (phase === 'holding') {
				phase = 'deleting';
				timer = setTimeout(tick, 40);
			} else {
				len--;
				display = target.slice(0, len);
				if (len === 0) {
					word = (word + 1) % keywords.length;
					phase = 'typing';
					timer = setTimeout(tick, 300);
				} else {
					timer = setTimeout(tick, 40);
				}
			}
		};

		timer = setTimeout(tick, 400);

		// 光标闪烁
		const blink = setInterval(() => (caretOn = !caretOn), 530);

		return () => {
			clearTimeout(timer);
			clearInterval(blink);
		};
	});
</script>

<section id="top" class="hero">
	<div class="container">
		<p class="eyebrow" data-reveal use:reveal>
			<span class="dot" aria-hidden="true"></span>
			{profile.title} · 深圳
		</p>

		<h1 class="headline" data-reveal use:reveal>
			你好,我是 <span class="accent-name">{profile.name}</span>
			<br />
			把数据做成<span class="type-wrap">
				<span class="typed">{display}</span><span class="caret" class:on={caretOn} aria-hidden="true"
					>_</span
				></span
			>
		</h1>

		<p class="tagline" data-reveal use:reveal>{profile.tagline}</p>

		<div class="actions" data-reveal use:reveal>
			<a class="btn-primary" href="#projects">查看项目</a>
			<a class="btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
				GitHub
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M7 17 17 7M7 7h10v10" />
				</svg>
			</a>
		</div>

		<dl class="stats" data-reveal use:reveal>
			{#each profile.stats as stat (stat.label)}
				<div class="stat">
					<dt class="stat-label">{stat.label}</dt>
					<dd class="stat-value tnum">{stat.value}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<style>
	.hero {
		padding-block: calc(var(--header-h) + var(--s-9)) var(--s-8);
		border-bottom: 1px solid var(--border);
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: var(--s-2);
		font-family: var(--font-mono);
		font-size: var(--text-label);
		letter-spacing: 0.08em;
		color: var(--text-2);
		margin: 0 0 var(--s-5);
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--accent);
	}

	.headline {
		font-size: var(--text-display);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.15;
		max-width: 20ch;
	}

	.accent-name {
		color: var(--accent);
	}

	.type-wrap {
		font-family: var(--font-display);
	}

	/* 窄屏打字词折成两行,预留高度避免打字过程中标题抖动 */
	@media (max-width: 640px) {
		.type-wrap {
			display: inline-block;
			min-height: 2.3em;
		}
	}

	.typed {
		background: linear-gradient(transparent 62%, var(--accent-soft) 62%);
	}

	.caret {
		color: var(--accent);
		opacity: 0;
		margin-left: 2px;
	}

	.caret.on {
		opacity: 1;
	}

	.tagline {
		margin-top: var(--s-5);
		max-width: var(--measure);
		color: var(--text-2);
		font-size: 1.0625rem;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s-3);
		margin-top: var(--s-6);
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		gap: var(--s-2);
		padding: var(--s-3) var(--s-5);
		border-radius: var(--radius-pill);
		background: var(--accent);
		color: var(--accent-ink);
		font-weight: 600;
		font-size: var(--text-small);
		transition: transform var(--dur-fast) var(--ease);
	}

	.btn-primary:hover {
		transform: translateY(-1px);
	}

	.btn-primary:active {
		transform: scale(0.97);
	}

	.btn-ghost {
		display: inline-flex;
		align-items: center;
		gap: var(--s-2);
		padding: var(--s-3) var(--s-5);
		border-radius: var(--radius-pill);
		border: 1px solid var(--border-strong);
		color: var(--text);
		font-weight: 500;
		font-size: var(--text-small);
		transition:
			border-color var(--dur-fast) var(--ease),
			transform var(--dur-fast) var(--ease);
	}

	.btn-ghost:hover {
		border-color: var(--accent);
	}

	.btn-ghost:active {
		transform: scale(0.97);
	}

	.stats {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s-6);
		margin: var(--s-8) 0 0;
		padding: var(--s-5) 0 0;
		border-top: 1px solid var(--border);
	}

	.stat {
		min-width: 96px;
	}

	.stat-label {
		font-size: var(--text-small);
		color: var(--text-3);
		margin: 0 0 var(--s-1);
	}

	.stat-value {
		font-family: var(--font-display);
		font-size: 1.75rem;
		font-weight: 700;
		margin: 0;
		letter-spacing: -0.01em;
	}

	@media (max-width: 640px) {
		.hero {
			padding-block: calc(var(--header-h) + var(--s-7)) var(--s-7);
		}

		.stats {
			gap: var(--s-5);
		}
	}
</style>
