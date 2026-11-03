<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '$lib/data';

	let { projects }: { projects: Project[] } = $props();
</script>

<section id="projects" class="section">
	<div class="container">
		<p class="section-label" data-reveal use:reveal>03 · 项目</p>
		<h2 class="section-title" data-reveal use:reveal>四个做过的产品</h2>

		<div class="list">
			{#each projects as project, i (project.id)}
				<ProjectCard {project} flip={i % 2 === 1} />
			{/each}
		</div>
	</div>
</section>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: var(--s-9);
	}
</style>
