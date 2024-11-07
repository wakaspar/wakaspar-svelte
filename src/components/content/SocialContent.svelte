<script>
    import SOCIALS from '$lib/socials.js';

    let socials = SOCIALS;
</script>

<div class='wrapper'>
    <div class='grid'>
        {#each socials as social}
            <a href='https://www.{social.link}/' target='_blank' title={social.name} class='soc-link'>
                <i class='bi bi-{social.icon}' aria-hidden='true' />
            </a>
        {/each}
    
    </div>
    
    <a class='about-link' href='/social'>Learn more =></a>
</div>

<style>
    .grid {
        padding: .25rem;
    }

    .grid a {
        text-decoration: none;
        color: #000;
    }

    .grid a i {
        font-size: 2rem;
    }

    .grid a:hover i {
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