<script>
    import IconLink from '../../components/base/IconLink.svelte';
    import SKILLS from '../../lib/skills.js';

    let skills = SKILLS;
</script>

<div>
    <h2>Tech</h2>
    <div class='grid'>
        {#each skills as skill}
            <IconLink skill={skill} />
        {/each}
    </div>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: center;
    }

    @media (max-width: 500px) {
        .grid {
            grid-template-columns: 1fr 1fr;
        } 
    }
</style>