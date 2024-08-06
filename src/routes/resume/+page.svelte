<script>
    import Menu from "../../components/base/Menu.svelte"
    import Entry from "../../components/base/Entry.svelte"
    import ENTRIES from "../../lib/ENTRIES.js";

    let entries = ENTRIES;
</script>

<div>
    <Menu />
    <h2>Resumé</h2>
    {#each entries as entry}
        <Entry entry={entry} />
    {/each}
</div>

<style>
    h2 {
        font-family: monospace;
        text-decoration: underline;
    }
</style>