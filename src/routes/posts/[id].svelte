<script lang="ts">
    import '../../prism.css';
    import { onMount } from "svelte";
    import { page } from '$app/stores';
    import { getPostById, getPostTag } from "../../services/wordpress";
    import Tags from "$lib/Tags.svelte";
    import codify from "$lib/actions/codify"

    let postPromise: any;
    let tagsPromise: any;
    const displayDate =  (date) : string => {
        const _date = new Date(date);
        const month = _date.toLocaleString('default', { month: 'long' });
        const day = _date.getDay();
        const year =_date.getFullYear();
        return `${month} ${day}, ${year}`
    }

    onMount( async()=> {
        console.log("Mounting...")
        postPromise = (await getPostById(parseInt(($page.params.id))));
        tagsPromise = (await getPostTag(parseInt(($page.params.id))));
        console.log(postPromise);
        console.log('tags',tagsPromise);
    })

</script>

{#if postPromise != null && tagsPromise != null}
    <article>
        <h1>{@html postPromise.title.rendered}</h1>
        <Tags tags={tagsPromise} animation={false}/>
        <h4>{@html postPromise.excerpt.rendered}</h4>
        <p>{displayDate(postPromise.date)}</p>
        <span use:codify>
            {@html postPromise.content.rendered}
        </span>
    </article>
    {:else}
    <div>Loading...</div>
{/if}


<style lang="postcss" global>
    h1 {
        font-size: 1.75rem;
        font-weight: 900;
        margin: 2rem 0;
    }
    p {
        margin: 1.75rem 0;
        line-height: 1.8;
        padding: 0;
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
</style>