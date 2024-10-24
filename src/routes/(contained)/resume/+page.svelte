<script>
    import Entry from '../../../components/base/Entry.svelte'
    import ENTRIES from '$lib/ENTRIES.js';

    let entries = ENTRIES;

    function downloadResume() {
        // TODO: download resume file instead.
        console.log('hello world');
    }
</script>

<div>
    <h2>Resumé</h2>
    <p>
        To download a detailed, up-to-date resumé, 
        <button class='dl-btn' on:click={downloadResume}>click here</button>
    </p>
    {#each entries as entry}
        <Entry entry={entry} />
    {/each}
</div>

<style>
    .dl-btn {
        background: none;
        border: 1px solid #000;
        font-family: monospace;
        cursor: pointer;
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