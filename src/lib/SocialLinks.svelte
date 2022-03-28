<script lang="ts">
	import { WhatsApp, Facebook, Twitter} from 'svelte-share-buttons-component';
	export let url;
	export let title;
    export let hashtags: any;

    let hashtagStr = "";
    if(hashtags){
        for (const tag of hashtags) {
            if(tag.name) hashtagStr += `${tag.name},` ;
        }
    }
</script>

<div class="flex flex-col py-6 px-0 justify-center">
    <div>
        <WhatsApp class="share-button" text="{title} {url}" />
        <Facebook class="share-button" quote="{title}" {url} />
        <Twitter class="share-button" text="{title}" {url} hashtags="{hashtagStr}"/>
    </div>
</div>

<style global>
    .share-button {
        display: grid;
        place-items: center;
        width: 35px;
        height: 35px;
        margin: .1rem;
        border-radius: 10px;
        align-content: center;
        justify-content: center;
    }
</style>