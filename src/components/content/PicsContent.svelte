<script>
    import IMAGES from '$lib/images';

    let n = 0;

    function goToPrev() {
        n == 0 ? n = IMAGES.length - 1 : n = n - 1
    }

    function goToNext() {
        n <= IMAGES.length - 2 ? n = n + 1 : n = 0
    }
</script>

<div class='gallery'>
    <button class='prev-btn' on:click={goToPrev} />
    
    <img src={IMAGES[n].source} alt={IMAGES[n].caption} >
    
    <button class='next-btn' on:click={goToNext} />

    <p>{IMAGES[n].caption}</p>
</div>

<style>
    .gallery {
        padding: .25rem;
    }

    .gallery button {
        background: none;
        border: 1px solid #000;
        cursor: pointer;
        font-family: monospace;
        font-size: 1.25rem;
        position: relative;
        top: -4rem;
    }

    .gallery button:hover {
        border-color: #fff;
        color: #fff;
    }

    .gallery button:active {
        background-color: #fff;
        border-color: #000;
        color: #000;
    }

    .gallery .prev-btn::after {
        content: '<'
    }

    .gallery .next-btn::after {
        content: '>'
    }

    .gallery p {
        margin: 0;
    }

    .gallery img {
        height: 150px;
        width: 150px;
        border: 1px solid #000;
    }

    .gallery img:hover {
        border-color: #fff;
    }
</style>