<script>
    import {theme} from '../storages/store'
    import Bar from '../libs/Bar.svelte';
</script>

<div class="{$theme} ">
    <div class="bg fg" >
        <div class=" section flex flex-column justify-center items-center">
            <h2>
                Luthfi
            </h2>
            <p>
                a Front-End Developer and Back-end Developer wannabe
            </p>
        </div>
    </div>
    <Bar></Bar>
</div>

<style>
    .section{
        height: 100vh;
    }
</style>