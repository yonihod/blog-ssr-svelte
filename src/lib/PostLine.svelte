<script lang="ts">
    import Tags from "./Tags.svelte";
    import * as timeago from "timeago-simple";
    import ReadingTime from "./ReadingTime.svelte";

    export let post: Post;
    let animation: boolean;
    let displayDate : string;

    if(post?.date)
        displayDate = timeago.simple(post.date);

</script>

<div class="my-6 w-full">
    <a class="no-underline" sveltekit:prefetch href="{`/posts/${post.id}`}">
        <div class="upper">
            <div class="text text-left text-xl font-bold">{@html post.title}
        </div>
    </a>
    <div class="meta">
        <span class="flex items-start whitespace-nowrap">
            <span class="text-sm my-2 mr-1">{displayDate},</span>
            <ReadingTime {post} />
        </span>
        {#if post.tags != null }    
            <Tags tags={post.tags} animation={animation}/>
        {/if}
    </div>
</div>