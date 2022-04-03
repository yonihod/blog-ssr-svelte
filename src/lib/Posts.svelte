<script lang="ts">
    import PostCard from "./PostCard.svelte";
    import DeviceDetector from "svelte-device-detector";
    import PostLine from "./PostLine.svelte";
    export let posts: Array<Post>;
</script>

<div class="grid md:mt-12 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-4">        
    {#if posts != null}
        {#each posts as post, i}
        <DeviceDetector showInDevice="desktop">
            <PostCard post={post} delay={(i) * 200}/>
        </DeviceDetector>

        <DeviceDetector showInDevice="mobile">
            <PostLine post={post} delay={(i) * 200}/>
        </DeviceDetector>
        {/each}
    {/if}
</div>