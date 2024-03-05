
<script>
    export let boxId;
    export let name = ''
    export let classes = ''

    let headerId = boxId ? boxId + '-header' : 'header'

    $: concatClasses = classes;
</script>

<div id={headerId}>
    <h1 class="{concatClasses}">{name}</h1>
</div>

<style>
    h1 {
        color: white;
        border: 1px solid skyblue;
        text-align: center;
        background: blue;
        margin: 0;
        cursor: move;
    }

    .mobile {
        cursor: auto;
    }
</style>