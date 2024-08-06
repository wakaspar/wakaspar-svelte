<script>
    import Menu from "../../components/base/Menu.svelte"
</script>
  
<div>
    <Menu />
    <h2>Soc</h2>
    <div class="grid">
        <a href="https://www.github.com/wakaspar" target="_blank">
            <i class="bi bi-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/wakaspar/" target="_blank">
            <i class="bi bi-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/kasparthefriendlyghost/" target="_blank">
            <i class="bi bi-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/wakaspar" target="_blank">
            <i class="bi bi-facebook" aria-hidden="true"></i>
        </a>
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

    .grid a {
        font-size: 5rem;
        filter: drop-shadow(3px 2px 4px #7a7a7a);
    }
</style>