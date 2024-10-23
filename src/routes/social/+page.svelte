<script>
    import SocialLink from '../../components/base/SocialLink.svelte'
    import SOCIALS from '$lib/socials.js';

    let socials = SOCIALS;
</script>
  
<div>
    <h2>Social</h2>
    <div class='grid'>
        {#each socials as s}
            <SocialLink social={s} />
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
            grid-template-columns: none;
            grid-template-rows: 1fr 1fr 1fr 1fr;
        }
    }
</style>