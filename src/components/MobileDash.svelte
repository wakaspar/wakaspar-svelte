<script>
    import Box from './base/Box.svelte';
    import ResumeContent from './content/ResumeContent.svelte';
    import InfoContent from './content/InfoContent.svelte';
    import PicsContent from './content/PicsContent.svelte';
    import SkillsContent from './content/SkillsContent.svelte';
    import SocialContent from './content/SocialContent.svelte';
</script>

<div class='mobile-dash'>
    <Box name='tech'>
        <SkillsContent />
    </Box>
    <Box name='about'>
        <InfoContent />
    </Box>
    <Box name='resumé'>
        <ResumeContent />
    </Box>
    <Box name='social'>
        <SocialContent />
    </Box>
    <Box name='pics'>
        <PicsContent />
    </Box>
</div>
