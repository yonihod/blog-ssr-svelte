
<script context="module">
    import { getPostById, getPostTag } from "../../services/wordpress";
	export async function load({ page, params, fetch }) {
        console.log('id', page.params.id);

        const post = await getPostById(parseInt((page.params.id)));
        const tags = await getPostTag(parseInt((page.params.id)))

		return {
            props: {
                post,
                tags
            }
        }
	}
</script>

<script lang="ts">
    import '../../prism.css';
    import { page } from '$app/stores';
    import Tags from "$lib/Tags.svelte";
    import codify from "$lib/actions/codify"
    import SocialLinks from '$lib/SocialLinks.svelte';
    import ReadingTime from '$lib/ReadingTime.svelte';

    export let post: Post;
    export let tags: Tag[];

    const displayDate =  (date) : string => {
        const _date = new Date(date);
        const month = _date.toLocaleString('default', { month: 'long' });
        const day = _date.getUTCDate();
        const year =_date.getFullYear();
        return `${month} ${day}, ${year}`
    }

</script>

<svelte:head>
    <meta property="og:title" content="{post.title.rendered}" />
    <meta property="og:description" content={post.excerpt.rendered} />
    <meta property="og:image" itemprop="image" content="{post.jetpack_featured_media_url}">
    <meta property="og:updated_time" content="{post.date}" />
    <title>{post.title.rendered}</title>
</svelte:head>

{#if post != null && tags != null}
    <article class="my-6">
        <h1 class="mb-0 font-extrabold">{@html post.title.rendered}</h1>
        <span class="flex gap-1 items-start">
            <p class="text-sm my-2 mx-0">{displayDate(post.date)},</p>
            <ReadingTime post={post} />
        </span>
        <Tags tags={tags} animation={false}/>

        <div class="mt-16" use:codify>
            {@html post.content.rendered}
        </div>
    </article>
    <div class="flex">
        <SocialLinks url={`https://${$page.host}${$page.path} `} title={post.title.rendered} hashtags={tags}/>
    </div>
    {:else}
    <div>Loading...</div>
{/if}


<style lang="scss" global>
    h1 {
        font-size: 2rem;
        font-weight: 900;
        margin: 2rem 0;
    }
    
    code {
        color: #fff;
        background: #272822;
        border-radius: .3em;
        border-left: 3px solid #f36d33;
        page-break-inside: avoid;
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 1.6em;
        max-width: 100%;
        overflow: auto;
        padding: 1.25em 2em;
        display: block;
        word-wrap: break-word;
    }

/* Code in text */
    p > code,
    li > code,
    dd > code,
    td > code {
        background: #272822;
        word-wrap: break-word;
        box-decoration-break: clone;
        padding: .1rem .3rem .2rem;
        border-radius: .2rem;
    }
    h2 {
        margin: 2rem 0;
    }

    h1,h2,h3,h4,h5,h6 {
        font-size: 1.5rem;
        img {
            display: inline;
            margin-left: 1rem;
            height: auto;
            max-width: 100%;
            vertical-align: middle;
        }
    }

    ol {
        display: block;
        list-style-type: decimal;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }
</style>