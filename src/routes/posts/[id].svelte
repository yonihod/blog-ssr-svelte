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
        const day = _date.getUTCDate();
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
        <p class="font-extrabold text-xl my-4 mx-0">{displayDate(postPromise.date)}</p>
        <Tags tags={tagsPromise} animation={false}/>

        <div class="mt-6" use:codify>
            {@html postPromise.content.rendered}
        </div>
    </article>
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