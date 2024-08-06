<script>
    import Box from './base/Box.svelte';
    import ExpContent from './content/ExpContent.svelte';
    import InfoContent from './content/InfoContent.svelte';
    import PicsContent from './content/PicsContent.svelte';
    import SkillsContent from './content/SkillsContent.svelte';
    import SocialContent from './content/SocialContent.svelte';
    import ResumeContent from './content/ResumeContent.svelte';
</script>

<div class='mobile-dash'>
    <Box name="skills">
        <SkillsContent />
    </Box>
    <Box name="info">
        <InfoContent />
    </Box>
    <Box name="experience">
        <ExpContent />
    </Box>
    <Box name="social">
        <SocialContent />
    </Box>
    <Box name="pics">
        <PicsContent />
    </Box>
    <Box name="resume">
        <ResumeContent />
    </Box>
</div>
