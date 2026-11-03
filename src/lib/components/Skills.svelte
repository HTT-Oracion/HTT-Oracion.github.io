<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { SkillGroup } from '$lib/data';

	let { skills }: { skills: SkillGroup[] } = $props();
</script>

<section id="skills" class="section section-alt">
	<div class="container">
		<p class="section-label" data-reveal use:reveal>02 · 技能</p>
		<h2 class="section-title" data-reveal use:reveal>日常在用的工具箱</h2>

		<div class="groups">
			{#each skills as group, gi (group.label)}
				<div class="group" data-reveal use:reveal={{ delay: gi * 70 }}>
					<h3 class="group-label">{group.label}</h3>
					<ul class="chips">
						{#each group.items as item (item)}
							<li class="chip">{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.groups {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--s-6) var(--s-8);
	}

	.group-label {
		font-family: var(--font-mono);
		font-size: var(--text-small);
		font-weight: 500;
		letter-spacing: 0.04em;
		color: var(--text-2);
		margin: 0 0 var(--s-4);
		padding-bottom: var(--s-3);
		border-bottom: 1px solid var(--border);
	}

	.chips {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: var(--s-2);
	}

	.chip {
		padding: var(--s-1) var(--s-3);
		border: 1px solid var(--border);
		border-radius: var(--radius-chip);
		font-size: var(--text-small);
		color: var(--text-2);
		background: var(--surface);
		transition:
			border-color var(--dur-fast) var(--ease),
			color var(--dur-fast) var(--ease);
	}

	.chip:hover {
		border-color: var(--accent);
		color: var(--text);
	}

	@media (max-width: 720px) {
		.groups {
			grid-template-columns: 1fr;
		}
	}
</style>
