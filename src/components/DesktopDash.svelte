<script>
    import DragBox from './base/DragBox.svelte'
    import ResumeContent from './content/ResumeContent.svelte'
    import InfoContent from './content/InfoContent.svelte'
    import PicsContent from './content/PicsContent.svelte'
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
    <DragBox onClick={bringToFront} name='tech' positionX=260 positionY=70>
        <SkillsContent />
    </DragBox>
    <DragBox onClick={bringToFront} name='about' positionX=10 positionY=70>
        <InfoContent />
    </DragBox>
    <DragBox onClick={bringToFront} name='resume' positionX=10 positionY=270>
        <ResumeContent />
    </DragBox>
    <DragBox onClick={bringToFront} name='social' positionX=260 positionY=270>
        <SocialContent />
    </DragBox>
    <DragBox onClick={bringToFront} name='pics' positionX=10 positionY=380>
        <PicsContent />
    </DragBox>
</div>