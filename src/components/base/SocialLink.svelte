<script>
    export let social = {
        label: '',
        link: '',
        name: '',
    }
</script>

<div title={social.label} class="soc-link">
    <a href="https://www.{social.link}/" target="_blank">
        <i class="bi bi-{social.name}" aria-hidden="true">
            <p>{social.label}</p>
        </i>
    </a>
</div>

<style>
    .soc-link {
        font-family: monospace;
        text-align: center;
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
</style>