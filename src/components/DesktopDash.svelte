<script>
    import DragBox from './base/DragBox.svelte'
    import ResumeContent from './content/ResumeContent.svelte'
    import AboutContent from './content/AboutContent.svelte'
    import PicsContent from './content/PicsContent.svelte'
    import TechContent from './content/TechContent.svelte'
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
    <DragBox onClick={bringToFront} name='Tech' positionX=260 positionY=70>
        <TechContent />
    </DragBox>
    <DragBox onClick={bringToFront} name='About' positionX=10 positionY=70>
        <AboutContent />
    </DragBox>
    <DragBox onClick={bringToFront} name='Resumé' positionX=10 positionY=270>
        <ResumeContent />
    </DragBox>
    <DragBox onClick={bringToFront} name='Social' positionX=260 positionY=290>
        <SocialContent />
    </DragBox>
    <DragBox onClick={bringToFront} name='Pics' positionX=260 positionY=400>
        <PicsContent />
    </DragBox>
</div>