
<script>
    import * as fs from 'fs';
    import * as util from 'util';
    import { onMount } from 'svelte';

    export let name = ''
    let icon = undefined

    $: lowerCaseName = name ? name.toLowerCase() : '';

    const { readFile } = fs
    const { promisify } = util
    // const asyncReadFile = promisify(readFile)

    // const returnSvg = async (path = './image.svg') => {
    //     const data = await asyncReadFile(path)
    //     // since fs.readFile returns a buffer, we should probably convert it to a string.
    //     return data.toString() 
    // }

    // returnSvg()
    //     .then(data => { icon = data })
    //     .catch(err => console.error(`failed to read svg file: ${err}`))
    
    onMount(() => {
        console.log(`icon: ${lowerCaseName}`)
    })
</script>

<div>
    <!-- <i class={lowerCaseName} tooltip={lowerCaseName}></i> -->
    {icon}
</div>

<style>
    i {
        margin: none;
    }
</style>