<script lang="ts">
    import Tags from "../components/tags.svelte";
    import { getPostTag } from "../../services/wordpress";
    import { onMount } from "svelte";
    import * as timeago from "timeago-simple";

    export let post: Post;
    export let delay: number;

    let tags: any;
    let animation: boolean;
    let displayDate : string;

    console.log('PostCard',post);
    onMount( async ()=> {
        tags = await getPostTag(post.id);
    })


    if(post?.date)
        displayDate = timeago.simple(post.date);

</script>

<a sveltekit:prefetch href="{`/posts/${post.id}`}"
    on:mouseover={() => animation = !animation}
    on:focus={() => animation = !animation}
    on:blur={() => animation = !animation}
    on:mouseout= {() => animation = !animation}
    class="card relative shadow-sm bg-white rounded-3xl px-4 py-2 w-full h-72"
    style="animation-delay: {delay}ms"
    >
    <div class="upper">
        <img src="{post.jetpack_featured_media_url}" alt="Post">
        <div class="box text">{@html post.title.rendered}</div>
    </div>
    <div class="meta justify-between">
        <span>{displayDate}</span>
        {#if tags != null }    
            <Tags tags={tags} animation={animation}/>
        {/if}
    </div>
</a>

<style lang="scss">
    .card {
        opacity: 0;
        animation: fadeIn 0.5s ease-in;
        animation-fill-mode: forwards;
        display: grid;
        grid-template-rows: 1fr 20px;
        overflow: hidden;
        color: var(--orange);
        text-decoration: none;
        &:hover {
            grid-template-rows: 80%;
            .meta {
                position: initial;
                opacity: 1;
                transform: translateY(0);
                visibility: visible;
            }
        }

        .meta {
            display: flex;
            background: #fff;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            visibility: hidden;
            opacity: 0;
            padding: 19px 13px;
            transform: translateY(100%);
        }
    }
</style>