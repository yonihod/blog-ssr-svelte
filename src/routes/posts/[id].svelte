<script lang="ts">
    import { onMount } from "svelte";
    import { page } from '$app/stores';
    import { getPostById, getPostTag } from "../../services/wordpress";
    import Tags from "$lib/Tags.svelte";
    
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
        {@html postPromise.content.rendered}
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
</style>