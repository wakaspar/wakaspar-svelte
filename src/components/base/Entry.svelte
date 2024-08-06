<script>
    export let entry = {
        dates: '',
        location: '',
        name: '',
        position: '',
        tech: [{icon: '', name: ''}],
    }
</script>

<div class="entry">
    <h3>{entry.name} - {entry.location}</h3>
    <p>{entry.position} | {entry.dates}</p>

    {#if entry.tech}
        <div class="tech">
            {#each entry.tech as t}
                <i title={t.name} class="devicon-{t.icon}-plain colored"></i>
            {/each}
        </div>
    {/if}
    <br>
</div>

<style>
    .entry {
        font-family: monospace;
        border-bottom: 1px solid #000;
    }

    .entry:last-child {
        border-bottom: none;   
    }

    .entry .tech i {
        font-size: 2rem;
        filter: drop-shadow(1px 1px 1px #7a7a7a);
    }

    .entry .tech i:hover {
        color: #000;
    }

    .entry .tech i::after {
        content: ' ';
    }
</style>