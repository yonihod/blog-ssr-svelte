<script lang=ts>
    import { Clock } from "tabler-icons-svelte";
    export let post;

    const calculatePostTIme = (post) : number => {
        const wordsCount = post.content.split(" ").length;
        return Math.ceil(wordsCount / 200);
    }
</script>

<span class="my-2 flex gap-1 items-center text-sm"> <Clock size={16} /> {calculatePostTIme(post)} min read </span>
