<script lang="ts">
import { getPosts } from "../../services/wordpress";
import { onMount } from "svelte";

let posts: Array<Post>;
    onMount( async ()=> {
        try {
			posts = await getPosts();
            console.log(posts);
		}catch(e) {
			console.error(e);
		}
    })
</script>

<div class="grid mt-12 md:grid-cols-3 sm:grid-cols-1 justify-items-center">        
    {#if posts != null}
        {#each posts as post}
            <a sveltekit:prefetch href="{`/posts/${post.id}`}">
                <div class="block">
                    <img src="{post.jetpack_featured_media_url}" alt="Post">
                    <div>{@html post.title.rendered}</div>
                </div>
            </a>
        {/each}
    {/if}
</div>