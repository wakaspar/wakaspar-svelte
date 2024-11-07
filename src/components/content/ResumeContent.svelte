<script>
    import ENTRIES from '$lib/entries.js';

    let entries = ENTRIES;
</script>

<table class='resume'>
    {#each entries as entry}
        <div class='entry'>
            <tr>{entry.name}</tr>
            <tr>{entry.position}</tr>
    
            {#if entry.tech}
                <tr class='tech'>
                    {#each entry.tech as tech}
                        <i title={tech.name} class='devicon-{tech.icon}-plain colored' />
                    {/each}
                </tr>
            {/if}
        </div>
    {/each}
    
    <a class='about-link' href='/resume'>Learn more =></a>
</table>

<style>
    .resume .entry:not(:nth-last-child(2)) {
        border-bottom: 1px solid #000;
    }

    .resume .entry tr {
        line-height: 10px;
        text-align: justify;
    }

    .resume .entry tr:hover, 
    .resume .entry .tech i:hover {
        color: #fff;
    }

    .resume .entry .tech {
        text-align: justify;
        display: flex;
        padding: .25rem 0;
    }
</style>