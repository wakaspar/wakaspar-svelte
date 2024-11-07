<script>
    import Entry from '../../../components/base/Entry.svelte'
    import ENTRIES from '$lib/ENTRIES.js';
    import RESUME from '$lib/Adam Kaspar Resume 2025.pdf';
</script>

<div>
    <h2>Resumé</h2>
    <p>
        To download a detailed, up-to-date resumé, 
        <a class='dl-btn' href={RESUME} download>click here</a>.
    </p>
    {#each ENTRIES as entry}
        <Entry entry={entry} />
    {/each}
</div>

<style>
    .dl-btn {
        background: none;
        border: 1px solid #000;
        color: #000;
        cursor: pointer;
        font-family: monospace;
        text-decoration: none;
        padding: 1px 3px;
    }

    .dl-btn:hover {
        border: 1px solid #fff;
        color: #fff;
    }

    .dl-btn:active {
        background: #fff;
        border: 1px solid #000;
        color: #000;
    }
</style>