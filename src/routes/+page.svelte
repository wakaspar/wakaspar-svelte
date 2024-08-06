<script>
    console.log('hello world');
</script>

<div class="grid">
    <div class="box">
        <h1 class="typewriter name">Adam Kaspar</h1>
        <a href="/about">enter =></a>
    </div>
</div>

<style>
    .grid {
        min-height: 98vh;
        font-family: monospace;
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