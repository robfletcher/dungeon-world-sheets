<script>
  import Tailwindcss from './Tailwindcss.svelte';

  import {playbooks} from "./Playbooks";
  import {character} from "./character";

  import CharacterSheet from "./CharacterSheet.svelte";
</script>

<Tailwindcss/>

<section>
  <label>Name <input bind:value={$character.name}></label>
  <label>Class
    <select bind:value={$character.characterClass}>
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

  .bar {
    @apply flex flex-wrap p-2;
  }

  .labelled-score {
    @apply m-2 relative;
  }

  .labelled-score h1,
  .labelled-score .value {
    @apply my-3 p-2;
    display: inline-block;
    vertical-align: middle;
  }

  .labelled-score h1 {
    @apply flex items-center h-10 px-10;
  }

  .labelled-score .value {
    @apply flex items-center justify-center h-16 w-16 -mr-8 text-3xl bg-white border-solid border-2 border-gray-800 rounded-full;
    position: absolute;
    right: 0;
    top: -0.75rem;
    z-index: 1;
  }

</style>