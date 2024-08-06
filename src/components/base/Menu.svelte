<script>
    const TABS = [
        { name: 'Tech', url: '/about' },
        { name: 'Resumé', url: '/resume' },
        { name: 'Social', url: '/social' },
        { name: 'Toys', url: '/toys' },
    ]

</script>

<p class="menu">
    Adam Kaspar => 
    {#each TABS as tab}
    <a href='{tab.url}'>{tab.name}</a>
    {/each}
</p>

<style>
    .menu * {
        border: 1px solid #000;
    }

    .menu {
        padding: 2px;
        border: 1px solid #000;
        font-family: monospace;
        display: inline;
    }
    .menu a {
        color: #000;
        padding: 1px;
        text-decoration: none !important;
        margin-right: 2rem;
    }

    .menu a:hover {
        background: #000;
        color: #fff;
    }
    
    @media (max-width: 450px) {
        .menu a {
            margin-right: unset;
        }
    }
</style>