
<script>
    // NOTE: Each component should have a sanity check for testing purposes, which should be removed
    // before reaching production.  Also, I'll need to make sure that everything is fully responsive
    // and mobile-first.  This comment should go at the top of each <script> tag in every component.
    //
    import Header from '../components/Header.svelte' ;
    import { onMount } from 'svelte';

    export let name = ''
    
    // TODO: needs work...
    onMount(() => {
        const draggableElement = document.querySelector('div[draggable="true"]');
        console.log('draggableElement: ', draggableElement);
        draggableElement.addEventListener("dragstart", (event) =>
            event.dataTransfer.setData("text/plain", "This text may be dragged"),
        );
    });

    console.log('Box loaded');
</script>

<div class='box' draggable='true'>
    <Header name={name} />
    <p>content</p>
</div>

<style>
    .box {
        background: grey;
        width: 10rem;
        display: inline-block;
        text-align: center;
    }
    p {
        color: white;
    }
</style>