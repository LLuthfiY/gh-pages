
<script>
    import ThemeSelector from '../libs/ThemeSelector.svelte';
    import {theme} from '../storages/store'
</script>
<svelte:head>
    <link rel="stylesheet" href="/css/theme/{$theme}.css">
    <link rel="stylesheet" href="/css/tachyons.css">
    <link rel="stylesheet" href="/css/style.css">
</svelte:head>

<style>
    :global(body) {
        margin: 0;
        min-height: 100vh;
        font-family: var(--Spline);
        background-color: var(--bg);
        color: var(--fg);
        min-height: 100vh;
        
    }
    :global(select, div, button, p, span, option, li, table, a, pre) {
        font-family: var(--Spline);
        color: var(--fg);
        transition-duration: 200ms;
    }
    :global(div::-webkit-scrollbar) {
        width: 5px;
    }
    
    :global(div::-webkit-scrollbar-track) {
    background: transparent;
    }
    
    :global(div::-webkit-scrollbar-thumb) {
    background: whitesmoke; 
    }


</style>
<div class=" courier">
    <slot/>
    <div class=" absolute" style="bottom:1rem; right:1rem;">
        <ThemeSelector/>
    </div>
</div>