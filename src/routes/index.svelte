<script context="module" lang="ts">
	import { ArrowBackUp  } from "tabler-icons-svelte";

	export const prerender = true;
</script>

<script lang="ts">
	import Posts from '$lib/Posts.svelte';
	import Author from '$lib/Author.svelte';
</script>

<svelte:head>
	<title>Hodevi - Personal blog by Yoni Hodefi</title>
	<meta property="og:site_name" content="blog.yonihodefi.dev">
	<meta property="og:title" content="Hodevi" />
	<meta property="og:description" content="Personal blog by Yoni Hodefi" />
	<meta property="og:image" itemprop="image" content="/yoni.png">
	<meta property="og:updated_time" content="{Date.now().toString()}" />
	<meta property="og:type" content="website" />
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