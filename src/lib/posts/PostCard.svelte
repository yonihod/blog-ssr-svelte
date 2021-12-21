<script lang="ts">
    export let post: Post
</script>

<a class="card block shadow-md rounded p-4 w-full orange-glow" sveltekit:prefetch href="{`/posts/${post.id}`}">
    <div>
        <img src="{post.jetpack_featured_media_url}" alt="Post">
        <div>{@html post.title.rendered}</div>
    </div>
</a>

<style>
    .card {
        background-color: var(--inverse-bg);
        color: var(--inverse-text);
    }
</style>