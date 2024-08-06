<script>
    const TABS = [
        { name: 'About', url: '/about' },
        { name: 'Social', url: '/social' },
        { name: 'Resume', url: '/resume' },
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
        border: 1px solid black;
    }

    .menu {
        padding: 2px;
        border: 1px solid black;
        font-family: monospace;
        display: inline;
    }
    .menu a {
        color: black;
        padding: 1px;
        text-decoration: none !important;
        margin-right: 2rem;
    }

    .menu a:hover {
        background: black;
        color: white;
    }
</style>