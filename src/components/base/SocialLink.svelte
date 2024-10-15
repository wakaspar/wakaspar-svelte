<script>
    export let social = {
        name: '',
        link: '',
        icon: '',
    }
</script>

<div title={social.name} class="soc-link">
    <a href="https://www.{social.link}/" target="_blank">
        <i class="bi bi-{social.icon}" aria-hidden="true">
            <p>{social.name}</p>
        </i>
    </a>
</div>

<style>
    .soc-link {
        font-family: monospace;
        text-align: center;
        padding-top: 1rem;
    }

    .soc-link a {
        text-decoration: none;
    }

    .soc-link a i {
        font-size: 5rem;
        filter: drop-shadow(3px 2px 4px #7a7a7a);
    }

    .soc-link a i p {
        color: #000;
        font-style: normal;
        font-size: 1rem;
    }
    
    .soc-link:hover {
        box-shadow: inset 0px 0px 0px 1px #000;
    }

    .soc-link:hover a i {
        color: #000;
    }

    .soc-link:hover a i p {
        color: #fff;
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