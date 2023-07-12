<script>
    import Logo from '../libs/Logo.svelte'
    import Cloud1 from './cloud1.svelte';
    import Cloud2 from './cloud2.svelte';
    import Cloud3 from './cloud3.svelte';
    import Cloud4 from './cloud4.svelte';
    import Cloud5 from './cloud5.svelte';
    import Terminal from './Terminal.svelte';
    import ThemeSelector from './ThemeSelector.svelte';
</script>



<div class=" hero relative">
    <nav class=" flex justify-center fixed w-100 fw1 z-9999" style="height: 4rem;">
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
    <div class=" relative h-100 overflow-hidden">
        <div class=" absolute w-100 h-100 ">
            <Cloud1/>
            <Cloud2/>
            <Cloud3/>
        </div>
        <div class=" absolute flex h-100 w-100">
            <div class=" flex justify-center items-center w-50">
                <div class=" w-80 h-75 overflow-hidden" style="border-radius: .5rem;">
                    <!-- <Terminal/> -->
                </div>
            </div>
            <div>
            </div>
        </div> 
    </div>
</div>

<style>
    .hero {
        height: 600px;
        border-bottom: 2px  dashed var(--fg);
    }   

    

</style>