
<script>
    import Header from './Header.svelte' ;

    export let name;

    let id = '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
</script>

<div id={id} class='box'>
    <Header classes='mobile' boxId={id} name={name} />
    <div class='content'>
        <slot />
    </div>
</div>

<style>
    .box {
        border: 1px solid #000;
        margin: .5rem 0;
    }

    .content {
        background: rgba(0, 0, 0, 0.25); /* black, 1/4 opacity */
        text-align: center;
    }
</style>