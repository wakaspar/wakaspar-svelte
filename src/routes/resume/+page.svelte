<script>
    import Entry from "../../components/base/Entry.svelte"
    import ENTRIES from "../../lib/ENTRIES.js";

    let entries = ENTRIES;
</script>

<div>
    <h2>Resumé</h2>
    {#each entries as entry}
        <Entry entry={entry} />
    {/each}
</div>
