<script>
    import DragBox from './base/DragBox.svelte'
    import ExpContent from './content/ExpContent.svelte'
    import InfoContent from './content/InfoContent.svelte'
    import PicsContent from './content/PicsContent.svelte'
    import ResumeContent from './content/ResumeContent.svelte'
    import SkillsContent from './content/SkillsContent.svelte'
    import SocialContent from './content/SocialContent.svelte'

    function bringToFront() {
        // grab all boxes; convert collection to array
        let boxes = document.getElementsByClassName('box')
        boxes = [...boxes]
        // create array of z index values for each box
        let zArr = []
        boxes.map((el) => zArr.push(Number(el.style.zIndex)))
        // find highest z index value and increment clicked box to max + 1
        let max = Math.max(...zArr)
        this.style.zIndex = (max + 1).toString()
    }
</script>

<div class='mobile-dash'>
    <!-- TODO: Randomize positions! <-- set top and left, will have to do each directly. -->
    <DragBox onClick={bringToFront} name="skills">
        <SkillsContent />
    </DragBox>
    <DragBox onClick={bringToFront} name="info">
        <InfoContent />
    </DragBox>
    <DragBox onClick={bringToFront} name="experience">
        <ExpContent />
    </DragBox>
    <DragBox onClick={bringToFront} name="social">
        <SocialContent />
    </DragBox>
    <DragBox onClick={bringToFront} name="pics">
        <PicsContent />
    </DragBox>
    <DragBox onClick={bringToFront} name="resume">
        <ResumeContent />
    </DragBox>
</div>