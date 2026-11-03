<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { profile, experience, skills, projects } from '$lib/data';
</script>

<svelte:head>
	<title>lvjinbin — 前端开发工程师</title>
	<meta name="description" content="lvjinbin 的个人作品集:企业级 SaaS、Chrome 插件、海外产品与数据平台的前端开发实践。" />
</svelte:head>

<Header />

<main>
	<Hero {profile} />
	<About {profile} {experience} />
	<Skills {skills} />
	<Projects {projects} />
	<Contact {profile} />
</main>

<Footer />
