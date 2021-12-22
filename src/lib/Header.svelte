<script lang="ts">
	import { onMount } from 'svelte';
	import Switch from './switch.svelte';
	import Author from './author.svelte';

	let darkTheme;

	onMount( ()=> {
        darkTheme = JSON.parse(localStorage.getItem("dark-theme")) || false;
        if(darkTheme){
            let body = document.querySelector("body");
            body.setAttribute('data-theme', darkTheme ? 'dark' :'light');

            const input: any = document.getElementById("theme-checkbox-toggler");
            input.checked = false;

        }
    })

    const toggleTheme = () => {
        darkTheme = !darkTheme;
        localStorage.setItem("dark-theme", darkTheme);
        let body = document.querySelector("body");
        body.setAttribute('data-theme', darkTheme ? 'dark' :'light');
    };

</script>

<header>	
	<div class="flex items-center">
		<a sveltekit:prefetch href="/">
			<img src="/blog-logo.png" alt="logo" class="logo">
		</a>
		<div class="ml-auto">
			<Switch toggleTheme={toggleTheme}></Switch>
		</div>
	</div>

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
</header>
