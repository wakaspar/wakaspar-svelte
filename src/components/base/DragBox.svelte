
<script>
    import Header from './Header.svelte' ;
    import { draggable } from '$lib/draggable.js'
    import { onMount } from 'svelte';

    export let name;
    export let onClick;
    export let positionX;
    export let positionY;
    
    let element = undefined;

    let id = '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )

    onMount(() => {
        draggable(id, positionX, positionY, name)
    })
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id={id} class='box' on:mousedown={onClick} bind:this={element}>
    <Header boxId={id} name={name} />
    <div class='content'>
        <slot />
    </div>
</div>

<style>
    .box {
        position: absolute;
        width: 15rem;

        border: 1px solid #000;
    }
    .content {
        background: rgba(255, 255, 255, 0.5); /* white, half opacity */
        background: rgba(0, 0, 0, 0.25); /* black, 1/4 opacity */
        text-align: center;
    }
</style>