<script>
    import DesktopDash from '../../components/DesktopDash.svelte';
    import MobileDash from '../../components/MobileDash.svelte';

    $: innerHeight = 0
    $: innerWidth = 0
    $: isMobile = outerWidth <= 760
    $: outerHeight = 0
    $: outerWidth = 0
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div>
    <h2>Sandbox</h2>
    {#if isMobile}
        <MobileDash />
    {:else}
        <DesktopDash />
    {/if}
</div>
