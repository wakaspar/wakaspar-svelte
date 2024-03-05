
<script>
    // NOTE: Each component should have a sanity check for testing purposes, which should be removed
    // before reaching production.  Also, I'll need to make sure that everything is fully responsive
    // and mobile-first.  This comment should go at the top of each <script> tag in every component.
    //

    // import AtomIcon from '../../static/icons/atom.svg';

    console.log('Icon loaded');

    export let name = ''
</script>

<div>
    <i>{name}</i>
</div>

<style>
    i {
        margin: none;
    }
</style>