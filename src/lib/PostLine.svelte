<script lang="ts">
    import Tags from "./Tags.svelte";
    import { getPostTag } from "../services/wp-rest";
    import { onMount } from "svelte";
    import * as timeago from "timeago-simple";
    import ReadingTime from "./ReadingTime.svelte";

    export let post: Post;
    let tags: any;
    let animation: boolean;
    let displayDate : string;

    onMount( async ()=> {
        tags = await getPostTag(post.id);
    })


    if(post?.date)
        displayDate = timeago.simple(post.date);

</script>

<div class="my-6 w-full">
    <a class="no-underline" sveltekit:prefetch href="{`/posts/${post.id}`}">
        <div class="upper">
            <div class="text text-left text-xl font-bold">{@html post.title.rendered}
        </div>
    </a>
    <div class="meta">
        <span class="flex items-start whitespace-nowrap">
            <span class="text-sm my-2 mr-1">{displayDate},</span>
            <ReadingTime {post} />
        </span>
        {#if tags != null }    
            <Tags tags={tags} animation={animation}/>
        {/if}
    </div>
</div>