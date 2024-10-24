<script>
    const TABS = [
        { name: 'Tech', url: '/tech' },
        { name: 'Resumé', url: '/resume' },
        { name: 'Social', url: '/social' },
        // { name: 'Toys', url: '/toys' },
    ]

</script>

<p class='menu'>
    <a class='name' href='/home'>Adam Kaspar => </a>
    {#each TABS as tab}
        <a class='page' href='{tab.url}'>{tab.name}</a>
    {/each}
</p>

<style>
    .menu * {
        border: 1px solid #000;
    }

    .menu {
        padding: 2px 1px 2px 2px;
        border: 1px solid #000;
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
        border: 1px solid #fff;
        color: #fff;
    }

    .menu .page:active {
        color: #000;
        background: #fff;
        border: 1px solid #000;
    }

    .name {
        border: none;
        text-decoration: none !important;
    }

    .name:hover {
        color: #fff !important;
        background: none !important;
        text-decoration: underline !important;
    }

    .name:visited {
        color: #000;
    }

    @media (min-width: 600px) {
        .menu a {
            margin-right: 2rem;
        }
    }
</style>