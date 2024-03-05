
<script>
    import Header from './Header.svelte' ;
    import { draggable } from '../../lib/draggable.js'
    import { onMount } from 'svelte';

    export let name;
    export let onClick;
    export let classes;
    let element;

    // $: concatClasses = classes.toString

    let id = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )

    onMount(() => {
        draggable(id)
    })
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id={id} class=' box' on:mousedown={onClick} bind:this={element}>
    <Header boxId={id} name={name} />
    <div class='content'>
        <slot />
    </div>
</div>

<style>
    .box {
        position: absolute;
        width: 15rem;
    }
    .content {
        background: white;
        text-align: center;
        border: 1px solid white;
    }
</style>