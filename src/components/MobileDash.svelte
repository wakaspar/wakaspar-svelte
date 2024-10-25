<script>
    import Box from './base/Box.svelte';
    import ResumeContent from './content/ResumeContent.svelte';
    import AboutContent from './content/AboutContent.svelte';
    import PicsContent from './content/PicsContent.svelte';
    import TechContent from './content/TechContent.svelte';
    import SocialContent from './content/SocialContent.svelte';
</script>

<div class='mobile-dash'>
    <Box name='about'>
        <AboutContent />
    </Box>
    <Box name='resumé'>
        <ResumeContent />
    </Box>
    <Box name='tech'>
        <TechContent />
    </Box>
    <Box name='social'>
        <SocialContent />
    </Box>
    <Box name='pics'>
        <PicsContent />
    </Box>
</div>
