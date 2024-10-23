
<script>
    export let boxId;
    export let name = ''
    export let classes = ''

    let headerId = boxId ? boxId + '-header' : 'header'

    $: concatClasses = classes;
</script>

<div id={headerId}>
    <h1 class='{concatClasses}'>{name}</h1>
</div>

<style>
    h1 {
        color: #000;
        text-decoration: underline;
        text-align: center;
        margin: 0;
        cursor: move;
        border-bottom: 1px solid #000;
        background: rgba(0, 0, 0, 0.25); /* black, 1/4 opacity */
    }

    .mobile {
        cursor: auto;
    }
</style>