<script lang="ts">
	import { onMount } from 'svelte';
	import Switch from './Switch.svelte';
    import Logo from './Logo.svelte';

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
			<!-- <img src="/blog-logo.svg" alt="logo" class="logo"> -->
            <Logo/>
		</a>
		<div class="ml-auto">
			<Switch toggleTheme={toggleTheme}></Switch>
		</div>
	</div>
</header>
