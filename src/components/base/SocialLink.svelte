<script>
    export let social = {
        name: '',
        link: '',
        icon: '',
    }
</script>

<a href='https://www.{social.link}/' target='_blank' title={social.name} class='soc-link'>
    <i class='bi bi-{social.icon}' aria-hidden='true'>
        <p>{social.name}</p>
    </i>
</a>

<style>
    .soc-link {
        text-align: center;
        padding-top: 1rem;
    }

    .soc-link {
        text-decoration: none;
    }

    .soc-link i {
        font-size: 5rem;
        filter: drop-shadow(3px 2px 4px #7a7a7a);
    }

    .soc-link i p {
        color: #000;
        font-style: normal;
        font-size: 1rem;
    }
    
    .soc-link:hover {
        box-shadow: inset 0px 0px 0px 1px #fff;
    }

    .soc-link:hover i {
        color: #fff;
    }

    .soc-link:hover i p {
        color: #fff;
    }

    .soc-link:active {
        background: #fff;
        box-shadow: inset 0px 0px 0px 1px #000;
    }

    .soc-link:active i {
        color: #000;
    }

    .soc-link:active i p {
        color: #000;
    }

    .bi-github {
        color: #181616;
    }

    .bi-linkedin {
        color: #0a66c2;
    }

    .bi-instagram {
        color: #f7d157;
    }

    .bi-facebook {
        color: #0866FF;
    }

    @media (max-width: 500px) {
        .soc-link {
            padding: 1rem 2rem 0rem 2rem;
        }
    }
</style>