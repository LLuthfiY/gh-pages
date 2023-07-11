
<script>
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
    :global(select, div, button, p, span, option, li, table, a) {
        font-family: var(--Spline);
        color: var(--fg);
    }

</style>
<div class=" courier">
    <slot/>
</div>