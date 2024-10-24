<script>
    export let entry = {
        dates: '',
        location: '',
        name: '',
        position: '',
        tech: [{name: '', icon: '', link: ''}],
    }
</script>

<div class='entry'>
    <h3>{entry.name} - {entry.location}</h3>
    <p>{entry.position} | {entry.dates}</p>

    {#if entry.tech}
        <div class='tech'>
            {#each entry.tech as t}
                <a class='link' href='https://{t.link}' target='_blank'>
                    <i title={t.name} class='devicon-{t.icon}-plain colored'></i>
                </a>
            {/each}
        </div>
    {/if}
</div>

<style>
    .entry {
        border-bottom: 1px solid #000;
        padding-bottom: 1rem;
    }

    .entry:last-child {
        border-bottom: none;   
    }

    .entry .tech i {
        font-size: 2rem;
        filter: drop-shadow(1px 1px 1px #7a7a7a);
    }

    .entry .tech i:hover {
        color: #fff;
    }

    .entry .tech i::after {
        content: ' ';
    }

    .entry .tech .link {
        text-decoration: none !important;
    }
</style>