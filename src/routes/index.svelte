<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Posts from '$lib/Posts.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Posts/>
</section>

<style>
</style>
