<script>
    console.log('hello world');
</script>

<div class='grid'>
    <div class='box'>
        <h1 class='typewriter name'>Adam Kaspar</h1>
        <a href='/home'>Click to enter =></a>
    </div>
</div>

<style>
    .grid {
        margin-top: .25rem;
        height: 98vh;
        border: 1px solid #000;
        display: grid;
        justify-content: center;
    }

    a {
        color: #000 !important;
    }

    a:hover {
        color: #fff !important;
    }

    .box {
        height: fit-content;
        grid-row-start: row1;
        border: 1px solid #000;
        padding: .5rem;
    }

    h1 {
        color: #000;
        letter-spacing: .15em;
    }
</style>