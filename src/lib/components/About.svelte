<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Experience, Profile } from '$lib/data';

	let { profile, experience }: { profile: Profile; experience: Experience[] } = $props();
</script>

<section id="about" class="section">
	<div class="container">
		<p class="section-label" data-reveal use:reveal>01 · 关于</p>
		<h2 class="section-title" data-reveal use:reveal>做前端的这几年</h2>

		<div class="grid">
			<p class="bio" data-reveal use:reveal>{profile.about}</p>

			<ol class="timeline">
				{#each experience as exp (exp.company + exp.period)}
					<li class="item" data-reveal use:reveal>
						<p class="period tnum">{exp.period}</p>
						<h3 class="company">{exp.company}</h3>
						<p class="role">{exp.role}</p>
						<ul class="points">
							{#each exp.points as point (point)}
								<li>{point}</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
		gap: var(--s-8);
		align-items: start;
	}

	.bio {
		color: var(--text-2);
		font-size: 1.0625rem;
		line-height: 1.85;
		position: sticky;
		top: calc(var(--header-h) + var(--s-5));
	}

	.timeline {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	.item {
		position: relative;
		padding: 0 0 var(--s-7) var(--s-5);
		border-left: 1px solid var(--border);
	}

	.item:last-child {
		padding-bottom: 0;
	}

	/* 时间线节点:方块圆点 */
	.item::before {
		content: '';
		position: absolute;
		left: -5px;
		top: 6px;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--bg);
		border: 2px solid var(--accent);
	}

	.period {
		font-family: var(--font-mono);
		font-size: var(--text-label);
		letter-spacing: 0.06em;
		color: var(--accent);
		margin: 0 0 var(--s-2);
	}

	.company {
		font-size: 1.125rem;
		font-weight: 600;
	}

	.role {
		color: var(--text-2);
		font-size: var(--text-small);
		margin: var(--s-1) 0 var(--s-3);
	}

	.points {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--s-2);
	}

	.points li {
		color: var(--text-2);
		font-size: 0.9375rem;
		line-height: 1.75;
		padding-left: var(--s-4);
		position: relative;
	}

	.points li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.72em;
		width: 12px;
		height: 1px;
		background: var(--border-strong);
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: 1fr;
			gap: var(--s-7);
		}

		.bio {
			position: static;
		}
	}
</style>
