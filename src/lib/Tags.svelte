<script lang="ts">
    export let tags: Tag[];
    export let animation: boolean;
    export let className = "inherit";

</script>

<div class="tag-container flex flex-wrap gap-x-2 {className}">
    {#each tags as tag, i}
        <span class:animate="{animation==true}" class="tag rounded-md px-2 py-1 font-bold text-xs" style="animation-delay: {(i) * 200}ms;">
            {tag.name}
        </span>
    {/each}
</div>

<style lang="scss">
    .tag {
        height: fit-content;
        cursor: pointer;
        background: var(--orange);
        color: #fff;
    }

    .tag.animate {
        opacity: 0;
        animation: fadeInBump 0.5s ease-in;
        animation-fill-mode: forwards;
    }

</style>
