<script>
    import {theme} from '../storages/store'
    import Hero from '../libs/Hero.svelte'
    import Nav from '../libs/Nav.svelte'
</script>

<div class="{$theme} ">
    <div class="bg fg" >
        <Nav></Nav>
        <Hero/>
    </div>
</div>
