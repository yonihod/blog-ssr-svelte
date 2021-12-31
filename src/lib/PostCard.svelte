<script lang="ts">
    import Tags from "./Tags.svelte";
    import { getPostTag } from "../services/wordpress";
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
    class="card relative shadow-sm bg-white rounded-3xl w-full h-72"
    style="animation-delay: {delay}ms"
    >
    <div class="upper pb-1">
        <img class="post-img" src="{post.jetpack_featured_media_url}" alt="Post">
        <div class="box px-4 py-2 mt-2 text text-xl font-bold relative">{@html post.title.rendered}</div>
    </div>
    <div class="meta px-4 py-2 justify-between">
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
        grid-template-rows: 1fr;
        overflow: hidden;
        color: #000;
        text-decoration: none;

        .upper {
            display: grid;
            grid-template-rows: 65% 1fr;
        }
        &:hover {
            .meta {
                opacity: 1;
                transform: translateY(0);
                visibility: visible;
            }
        }
        .pb-1 {
            overflow: hidden;
        }

        .box {
            background: #fff;
            height: 100%;

        }
        .box::before {
            content: "";
            width: 45px;
            border-top: 8px solid var(--orange);
            position: absolute;
            top: 0;
            z-index: 10;
        }

        .meta {
            display: grid;
            grid-template-columns: 50% 1fr;
            background: #fff;
            z-index: 1;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            visibility: hidden;
            opacity: 0;
            height: 81px;
            transform: translateY(100%);
        }
    }
</style>