<script>
    import Menu from "../../components/base/Menu.svelte"
    import SocialLink from "../../components/base/SocialLink.svelte"

    let socials = [
        {label: 'Github', link: 'github.com/wakaspar', name: 'github'},
        {label: 'LinkedIn', link: 'linkedin.com/in/wakaspar', name: 'linkedin'},
        {label: 'Instagram', link: 'instagram.com/kasparthefriendlyghost', name: 'instagram'},
        {label: 'Facebook', link: 'facebook.com/wakaspar', name: 'facebook'}
    ]
    // TODO: Pull gradient hover css from old website & apply to these?
</script>
  
<div>
    <Menu />
    <h2>Socials</h2>
    <div class="grid">
        {#each socials as s}
            <SocialLink social={s} />
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

    @media (max-width: 400px) {
        .grid {
            grid-template-columns: none;
            grid-template-rows: 1fr 1fr 1fr 1fr;
        }
    }
</style>