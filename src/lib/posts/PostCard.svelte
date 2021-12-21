<script lang="ts">
    export let post: Post
</script>

<a class="card block shadow-md rounded p-4 w-full orange-glow max-h-72" sveltekit:prefetch href="{`/posts/${post.id}`}">
    <div>
        <img src="{post.jetpack_featured_media_url}" alt="Post">
        <div class="box text">{@html post.title.rendered}
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam vitae consequuntur nemo repudiandae qui atque, porro illum accusamus modi reprehenderit eaque commodi aliquid suscipit consequatur laborum incidunt excepturi nisi.</span>
        </div>
    </div>
</a>

<style>
    .card {
        background-color: var(--inverse-bg);
        color: var(--inverse-text);
    }
</style>