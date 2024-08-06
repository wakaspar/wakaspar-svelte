<script>
    import IconLink from "../../components/base/IconLink.svelte";
    import Menu from "../../components/base/Menu.svelte"
    import SKILLS from "../../lib/skills.js";

    let skills = SKILLS;
</script>

<div>
    <Menu />
    <h2>Tech</h2>
    <div class="grid">
        {#each skills as skill}
            <IconLink skill={skill} />
        {/each}
    </div>
</div>

<style>
    h2 {
        font-family: monospace;
        text-decoration: underline;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: center;
    }
</style>