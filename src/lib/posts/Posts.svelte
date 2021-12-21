<script lang="ts">
import { getPosts } from "../../services/wordpress";
import { onMount } from "svelte";
import PostCard from "./PostCard.svelte";

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

<div class="grid mt-12 md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-4">        
    {#if posts != null}
        {#each posts as post}
            <PostCard post={post}/>
        {/each}
    {/if}
</div>