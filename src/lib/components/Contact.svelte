<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Profile } from '$lib/data';

	let { profile }: { profile: Profile } = $props();

	const githubHandle = $derived(profile.github.split('/').pop() ?? '');
</script>

<section id="contact" class="section section-alt">
	<div class="container">
		<p class="section-label" data-reveal use:reveal>04 · 联系</p>
		<h2 class="section-title" data-reveal use:reveal>有合适的机会,欢迎聊聊</h2>

		<div class="panel card" data-reveal use:reveal>
			<a class="channel" href={'mailto:' + profile.email}>
				<span class="ch-icon" aria-hidden="true">
					<!-- 信封 -->
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<rect x="2" y="4" width="20" height="16" rx="2" />
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
					</svg>
				</span>
				<span class="ch-text">
					<span class="ch-label">邮箱</span>
					<span class="ch-value">{profile.email}</span>
				</span>
			</a>

			<span class="channel" title="完整号码请通过邮箱联系">
				<span class="ch-icon" aria-hidden="true">
					<!-- 电话听筒 -->
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
					</svg>
				</span>
				<span class="ch-text">
					<span class="ch-label">电话</span>
					<span class="ch-value tnum">{profile.phone}</span>
				</span>
			</span>

			<a class="channel" href={profile.github} target="_blank" rel="noopener noreferrer">
				<span class="ch-icon" aria-hidden="true">
					<!-- GitHub mark -->
					<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
					</svg>
				</span>
				<span class="ch-text">
					<span class="ch-label">GitHub</span>
					<span class="ch-value">@{githubHandle}</span>
				</span>
			</a>
		</div>
	</div>
</section>

<style>
	.panel {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		gap: var(--s-6);
		padding: var(--s-6) var(--s-7);
		box-shadow: var(--shadow-1);
	}

	.channel {
		display: flex;
		align-items: center;
		gap: var(--s-3);
	}

	.ch-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: var(--radius-chip);
		background: var(--accent-soft);
		color: var(--accent);
		flex-shrink: 0;
	}

	.ch-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.ch-label {
		font-family: var(--font-mono);
		font-size: var(--text-label);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-3);
	}

	.ch-value {
		font-family: var(--font-display);
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--text);
	}

	.channel:hover .ch-value {
		color: var(--accent);
	}

	.channel:hover .ch-icon {
		background: var(--accent);
		color: var(--accent-ink);
	}

	@media (max-width: 720px) {
		.panel {
			padding: var(--s-5);
			gap: var(--s-5);
		}

		.channel {
			width: 100%;
		}
	}
</style>
