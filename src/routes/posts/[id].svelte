
<script context="module">
    import { getPostById as getPostGraphql } from "../../services/wp-graphql";
	export async function load({ params }) {
        const post = await getPostGraphql(params.id);
		return {
            props: {
                post,
                tags: post.tags
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

    export let post: any;
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
    <meta property="og:title" content="{post.title}" />
    <meta property="og:description" content={post.excerpt} />
    <meta property="og:image" itemprop="image" content="{post.featuredImage}">
    <meta property="og:updated_time" content="{post.date}" />
    <title>{post.title}</title>
</svelte:head>

{#if post != null}
    <article class="md:my-6 lg:my-6">
        <h1 class="mb-0 font-extrabold">{@html post.title}</h1>
        <span class="flex gap-1 items-start">
            <p class="text-sm my-2 mx-0">{displayDate(post.date)},</p>
            <ReadingTime post={post} />
        </span>
        <Tags tags={tags} animation={false}/>

        <div class="mt-16" use:codify>
            {@html post.content}
        </div>
    </article>
    <div class="flex">
        <SocialLinks url={`https://${$page.host}${$page.url.pathname} `} title={post.title} hashtags={null}/>
    </div>
    {:else}
    <div>Loading...</div>
{/if}


<style lang="scss" global>

    @media (max-width:640px) {
        article {
            overflow-x: hidden;
        }
    }
    
    h1 {
        font-size: 2rem;
        font-weight: 900;
        margin: 2rem 0;
    }

    article {
        max-width: 100%;
    }

    .wp-block-code {
        white-space: pre-wrap;
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
        display: block;
        padding: 1.25rem .5rem;
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
        font-size: 2rem;
    }

    h4 {
        margin-top:1rem;
        margin-bottom: .5rem;
        font-size: 1.5rem;
    }
    h1,h2,h3,h4,h5,h6 {
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