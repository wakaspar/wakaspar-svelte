<script>
    import SKILLS from '$lib/skills.js';

    let skills = SKILLS;
</script>

<div class='wrapper'>
    <p>A quick list of my skills:</p>
    <div class='grid'>
        {#each skills as skill}
            <i title={skill.name} class='devicon-{skill.icon}-plain colored' />        {/each}
    </div>

    <a class='about-link' href='/tech'>Learn more =></a>
</div>

<style>
    .wrapper p {
        padding-left: .25rem;
        text-align: left;
        margin: 0;
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