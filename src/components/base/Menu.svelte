<script>
    const TABS = [
        { name: 'Tech', url: '/about' },
        { name: 'Resumé', url: '/resume' },
        { name: 'Social', url: '/social' },
        { name: 'Toys', url: '/toys' },
        { name: 'D&D', url: '/draggable' },
    ]

</script>

<p class="menu">
    <a class="name" href="/">Adam Kaspar => </a>
    {#each TABS as tab}
        <a class="page" href='{tab.url}'>{tab.name}</a>
    {/each}
</p>

<style>
    .menu * {
        border: 1px solid #000;
    }

    .menu {
        padding: 2px 1px 2px 2px;
        border: 1px solid #000;
        font-family: monospace;
        display: inline;
    }

    .menu .page {
        color: #000;
        padding: 0px 2px;
    }

    .menu a {
        margin-right: 1px;
        text-decoration: none !important;
    }

    .menu .page:hover {
        background: #000;
        color: #fff;
    }

    .name {
        border: none;
        text-decoration: none !important;
    }

    .name:hover {
        background: none !important;
        text-decoration: underline !important;
    }

    .name:hover, .name:visited  {
        color: #000 !important;
    }

    @media (min-width: 600px) {
        .menu a {
            margin-right: 2rem;
        }
    }
</style>