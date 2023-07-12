<script>
    import { theme } from '../storages/store'
    import Palette from './Palette.svelte';
    let showDropdown = false;
    const changeTheme = (/** @type {string} */ nt) => {
        theme.set(nt);
        return null
    } 
    const toggleDropdown = () => {
        showDropdown = !showDropdown;
    }
    
</script>

<div class=" flex flex-column">
    <div class=" options flex flex-column bgAlt  overflow-auto" style="border-radius: .5rem; height:{showDropdown ? '300px' : '0'}">
        <button class="ma2 {$theme == 'Nord' ? 'active ' : ''}" on:click={()=>{changeTheme('Nord'); toggleDropdown()}}>
            Nord
        </button>
        <button class="ma2 {$theme == 'Catppuccin-Macchiato' ? 'active ' : ''}" on:click={()=>{changeTheme('Catppuccin-Macchiato'); toggleDropdown()}}>
            Catppuccin Macchiato
        </button>
    </div>
    <button class=" theme-btn pa4 mt2 ml-auto br-pill " on:click={()=>toggleDropdown()} >
        <Palette/>
    </button>
</div>

<style>
    .options {
        width: 20rem;
        transition-duration: 200ms;
    }
    .options button {
        background-color: var(--bgAlt);
        border: 0;
        padding: .5rem ;
        border-radius: .5rem;
        
    }

    .theme-btn {
        background-color: var(--bgAlt);
        border: 0;
        padding: .5rem ;
        
        
    }
    .options button:hover {
        background-color: var(--bg);
    }

    .options button.active {
        background-color: var(--bg);
    }
</style>