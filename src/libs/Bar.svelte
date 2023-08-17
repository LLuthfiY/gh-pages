<script>

</script>

<div class=" Bar">
    <div class="BarText">
        <div class=" BarLetter">A</div>
        <div class=" BarLetter">B</div>
        <div class=" BarLetter">o</div>
        <div class=" BarLetter">u</div>
        <div class=" BarLetter">t</div>
    </div>
    
   
    <div class="BarText">
        <div class=" BarLetter">e</div>
        <div class=" BarLetter">x</div>
        <div class=" BarLetter">p</div>
        <div class=" BarLetter">e</div>
        <div class=" BarLetter">r</div>
        <div class=" BarLetter">i</div>
        <div class=" BarLetter">e</div>
        <div class=" BarLetter">n</div>
        <div class=" BarLetter">c</div>
        <div class=" BarLetter">e</div>
    </div>
    
    <div class="BarText">
        <div class=" BarLetter">c</div>
        <div class=" BarLetter">o</div>
        <div class=" BarLetter">n</div>
        <div class=" BarLetter">t</div>
        <div class=" BarLetter">a</div>
        <div class=" BarLetter">c</div>
        <div class=" BarLetter">t</div>
    </div>
    
</div>

<style>
    .Bar {
        position: absolute;
        bottom: 0;
        width: 100%;
        overflow-x: auto;
        width: 12em;
        height: 100vw;
        direction: rtl;
        rotate: -90deg;
        translate: 100vw 0;
        transform-origin: bottom left;
    }

    .BarText {
        margin: 4em 0;
        width: 12em;
        opacity: .2;
        cursor: pointer;
    }

    .BarText:hover {
        color: var(--danger);
        opacity: 1;
    }
    .BarText:hover .BarLetter {
        color: var(--danger);
        
    }

    .BarLetter {
        text-transform: uppercase;
        font-size: 10em;
        display: flex;
        rotate: 90deg;
        justify-content: center;
        align-items: center;
        height: .7em;
        /* -webkit-text-stroke: .4rem var(--fg) ; */
        
        font-weight: bolder;
    }
    
    
    
</style>
