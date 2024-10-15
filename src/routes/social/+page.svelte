<script>
    import Menu from "../../components/base/Menu.svelte"
    import SocialLink from "../../components/base/SocialLink.svelte"

    let socials = [
        {name: 'Github', link: 'github.com/wakaspar', icon: 'github'},
        {name: 'LinkedIn', link: 'linkedin.com/in/wakaspar', icon: 'linkedin'},
        {name: 'Instagram', link: 'instagram.com/kasparthefriendlyghost', icon: 'instagram'},
        {name: 'Facebook', link: 'facebook.com/wakaspar', icon: 'facebook'}
    ]
</script>
  
<div>
    <Menu />
    <h2>Social</h2>
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

    @media (max-width: 500px) {
        .grid {
            grid-template-columns: none;
            grid-template-rows: 1fr 1fr 1fr 1fr;
        }
    }
</style>