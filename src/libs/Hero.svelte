<script>
    import Logo from '../libs/Logo.svelte'
</script>

<div class=" hero">
    <nav class=" flex justify-center fixed w-100 fw1" style="height: 4rem;">
        <div class="flex no-underline mh2">
            <Logo/>
        </div>
        <div class="flex items-center mh2">
            <a class=" no-underline " href="#about">About</a> 
        </div>
        <div class="flex items-center mh2">
            <a class=" no-underline " href="#exp">Exp</a> 
        </div>
        <div class="flex items-center mh2">
            <a class=" no-underline " href="#contact">Contact</a> 
        </div>
    </nav>
    <div class=" pt4">

    </div>
</div>

<style>
    .hero {
        height: 500px;
        border-bottom: 2px  dashed var(--fg);
    }

</style>