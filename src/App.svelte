<script>
  import Tailwindcss from './Tailwindcss.svelte';

  import {playbooks} from "./Playbooks";
  import {name, characterClass} from "./character";

  import CharacterSheet from "./CharacterSheet.svelte";
</script>

<Tailwindcss/>

<section>
  <label>Name <input bind:value={$name}></label>
  <label>Class
    <select bind:value={$characterClass}>
      {#each playbooks as playbook}
        <option value={playbook.name}>{playbook.name}</option>
      {/each}
    </select>
  </label>
</section>

<CharacterSheet/>

<style global>
  * {
    font-family: 'IM Fell English', sans-serif;
  }

  h1 {
    @apply bg-gray-800 text-white text-lg h-8;
    font-family: 'IM Fell English SC', sans-serif;
  }
</style>