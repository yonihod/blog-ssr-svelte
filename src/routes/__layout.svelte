<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.scss';
</script>

<div id="root" class="lg:w-1/2 md:w-full p-4 mx-auto relative">
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-EYG3T2R6M8"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){window.dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-EYG3T2R6M8');
	</script>
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

	@media screen and (max-width:768px){
		#root {
			height: auto;
		}
	}
</style>