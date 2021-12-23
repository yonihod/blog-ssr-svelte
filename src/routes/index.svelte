<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Posts from '$lib/Posts.svelte';
	import Author from '$lib/Author.svelte';
</script>

<svelte:head>
	<title>blog.yonihodeffi.dev</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" type="text/css">  
  	<link rel="stylesheet" href="https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism_okaidia.css">    
</svelte:head>
<div class="mt-4">
	<figure class="flex items-center gap-2">
		<Author img={"/yoni.png"} alt={"yoni"}/>
		<figcaption>
			Personal blog by
			<br>
			<a href="https://www.yonihodeffi.dev">
				Yoni Hodeffi
			</a>
		</figcaption>
	</figure>
</div>
<section class="my-4">
	<Posts/>
</section>
