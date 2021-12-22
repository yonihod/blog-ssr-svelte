<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import '../app.scss';
</script>

<div id="root" class="lg:w-1/2 md:w-full p-4 mx-auto relative">
	<Header/>
	<slot/>
	<Footer/>
</div>

<style>
	#root{
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: 100vh;
	}
</style>