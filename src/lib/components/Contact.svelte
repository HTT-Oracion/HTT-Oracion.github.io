<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Profile } from '$lib/data';

	let { profile }: { profile: Profile } = $props();
</script>

<section id="contact" class="section section-alt">
	<div class="container">
		<p class="section-label" data-reveal use:reveal>04 · 联系</p>
		<h2 class="section-title" data-reveal use:reveal>有合适的机会,欢迎聊聊</h2>

		<div class="panel card" data-reveal use:reveal>
			<a class="channel" href={'mailto:' + profile.email}>
				<span class="ch-label">邮箱</span>
				<span class="ch-value">{profile.email}</span>
			</a>
			<span class="divider" aria-hidden="true"></span>
			<a class="channel" href={profile.github} target="_blank" rel="noopener noreferrer">
				<span class="ch-label">GitHub</span>
				<span class="ch-value">@{profile.github.split('/').pop()}</span>
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
		flex-direction: column;
		gap: var(--s-1);
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
		font-size: 1.25rem;
		font-weight: 500;
		color: var(--text);
	}

	.channel:hover .ch-value {
		color: var(--accent);
	}

	.divider {
		width: 1px;
		background: var(--border);
	}
</style>
