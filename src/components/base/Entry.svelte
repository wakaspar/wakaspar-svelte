<script>
    // import { onMount } from 'svelte';
    import SKILLS from '../../lib/skills';
    
    export let entry = {
        dates: '',
        location: '',
        name: '',
        position: '',
        tech: ['', '', ''],
    }

    $: tech = entry.tech ? getTechSkills(entry.tech) : null
    // let tech = [];

    function getTechSkills(arr) {
        arr && arr.forEach(key => {
            let skill = SKILLS.find((s) => s.icon == key)
            let index = arr.indexOf(key)
            arr[index] = skill
        });
        console.log('arr: ', arr)
        return arr;
    }

    // TODO: works on page load but doesn't work when swapping 
    // between pages; another TypeError throws...this sucks.

    // onMount(() => {
    //     if (entry.tech) {
    //         tech = getTechSkills(entry.tech)
    //     } else {
    //         tech = null;
    //     }
    // });

    console.log('tech: ', tech);
</script>

<div class="entry">
    <h3>{entry.name} - {entry.location}</h3>
    <p>{entry.position} | {entry.dates}</p>

    {#if tech}
        <div class="tech">
            <!-- {#each tech as t}
                <i title={t.name} class="devicon-{t.icon}-plain colored"></i>
            {/each} -->
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