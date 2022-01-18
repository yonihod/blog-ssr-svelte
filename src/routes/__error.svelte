<div class="container">
	<div id="main" class="h-full">
        <h1 class="text-7xl font-extrabold">404</h1>
		<h2 class="font-extrabold text-center md:text-5xl sm:text-2xl rounded">
			Congratulations, you found a page that doesnt exist
		</h2>
        <a
            class="text-center text-xl no-underline mt-4 p-4 fit w-36 shadow bg-orange-400 text-white mx-auto block"
            href="/">Go to home</a
        >
	</div>
</div>

<style lang="scss">
	.container {
		max-height: 80vh;
	}
	#main {
		display: block;
        text-align: center;
		background-image: url(/404.svg);
		background-size: 60% 60%;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: 50% 100%;
		h2 {
			padding: 1rem;
			background: transparent;
		}
	}
</style>
