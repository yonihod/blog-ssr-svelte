<script context="module" lang="ts">
	import { ArrowBackUp  } from "tabler-icons-svelte";

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

<section class="my-4">
	<div>
		<figure class="flex items-center gap-2">
			<Author img={"/yoni.png"} alt={"yoni"}/>
			<figcaption class="intro">
				Personal blog by
				<a class="font-bold" href="https://www.yonihodeffi.dev">
					Yoni Hodefi
				</a>
				<br>
				<div class="flex gap-2 items-center">
					Eat, Sleep, Dev, Repeat <ArrowBackUp/>
				</div>
			</figcaption>
		</figure>
	</div>
	<Posts/>
</section>

<style>
	.intro {
		font-family: monospace;
	}
</style>