<script>
    export let img;
    export let alt;
    export let url = '';
</script>

<a href={url}>
    <img src={img} alt={alt} class="h-16 w-16 rounded-full">
</a>