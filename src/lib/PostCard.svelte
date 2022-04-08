<script lang="ts">
    import Tags from "./Tags.svelte";
    import { getPostTag } from "../services/wp-rest";
    import { onMount } from "svelte";
    import * as timeago from "timeago-simple";
    import ReadingTime from "./ReadingTime.svelte";

    export let post: Post;
    export let delay: number;

    let tags: any;
    let animation: boolean;
    let displayDate : string;

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
    <div class="upper">
        <img class="post-img" src="{post.jetpack_featured_media_url}" alt="Post"/>
        <div class="box px-4 py-4 text text-xl font-bold absolute top-2">{@html post.title.rendered}
    </div>
    <div class="meta px-4 py-2">
        <span class="flex items-start whitespace-nowrap">
            <span class="text-sm my-2 mr-1">{displayDate},</span>
            <ReadingTime {post} />
        </span>
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

        &:after {
            content: "";
            width: 100%;
            position: absolute;
            top: 0;
            height: 100px;
            background: linear-gradient(to bottom, #efefef, transparent 80%);
            z-index: 1;
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

        .post-img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        .box {
            width: 100%;
            z-index: 2;
        }

        .upper {
            height: 100%;
            width: 100%;
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
            display: flex;
            flex-direction: column;
            gap: .5rem;
            background: #f5f5f4d9;
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
            height: 120px;
            transform: translateY(400px);
        }
    }
</style>