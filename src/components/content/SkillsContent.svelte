<script>
    import Icon from '../base/Icon.svelte'
    import SKILLS from '$lib/skills.js';

    let skills = SKILLS;
</script>

<div>
    <div class='grid'>
        {#each skills as skill}
            <i title={skill.name} class='devicon-{skill.icon}-plain colored' />
        {/each}
    </div>

    <a class='about-link' href='/about'>learn more =></a>
</div>

<style>
    .about-link {
        color: #000;
    }

    .about-link:hover {
        color: #fff;
    }

    .grid {
        padding: .25rem;
        display: grid;
        /* 8 columns */
        grid-template-columns: 1fr 1fr 1fr 1fr
                               1fr 1fr 1fr 1fr;
    }

    .grid i {
        margin: 1px;
        font-size: 1.5rem;
    }

    .grid i:hover {
        color: #fff;
    }
</style>