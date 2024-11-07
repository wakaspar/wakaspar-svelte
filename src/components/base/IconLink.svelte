<script>
    export let skill = {
        link: '',
        name: '',
        icon : '',
    }
</script>

<div title={skill.name}>
    <a class='icon-link' href='https://{skill.link}/' target='_blank'>
        <br>
        <i class='devicon-{skill.icon}-plain colored'>
            <p>{skill.name}</p>
        </i>
    </a>
</div>

<style>
    .icon-link {
        display: block;
        text-decoration: none !important;
        text-align: center;
        padding-bottom: 1px;
    }
    
    .icon-link i p {
        font-size: 1rem;
        color: #000;
    }

    .icon-link:hover {
        box-shadow: inset 0px 0px 0px 1px #fff;
    }

    .icon-link:hover i {
        color: #fff;
    }

    .icon-link:hover i p {
        color: #fff;
    }

    .icon-link:active {
        background-color: #fff;
        box-shadow: inset 0px 0px 0px 1px #000;
    }

    .icon-link:active i {
        color: #000;
    }

    .icon-link:active i p {
        color: #000;
    }
    
    .icon-link i {
        font-size: 3rem;
        filter: drop-shadow(2px 2px 2px #7a7a7a);
    }
</style>