<script>
    export let link = '';
    export let skill = '';
    export let name = '';

    function uppercaseSkill(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    $: checkedName = name ? name : uppercaseSkill(skill)
</script>

<div>
    <a class="icon-link" href="https://{link}/" target="_blank">
        <br>
        <i class="devicon-{skill}-plain colored">
            <p>{checkedName}</p>
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
        font-family: monospace;
        font-size: 1rem;
        color: #000;
    }

    .icon-link:hover {
        box-shadow: inset 0px 0px 0px 1px #000;
    }

    .icon-link:hover i {
        color: #000;
    }

    .icon-link:hover i p {
        color: #fff;
    }
    
    .icon-link i {
        font-size: 3rem;
        filter: drop-shadow(3px 2px 4px #7a7a7a);
    }
</style>