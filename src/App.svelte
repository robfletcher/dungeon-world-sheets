<script>
  import Tailwindcss from './Tailwindcss.svelte';

  import {playbooks} from "./Playbooks";
  import {character} from "./store";

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
    font-family: 'IM Fell DW Pica', sans-serif;
  }

  h1 {
    font-family: 'IM Fell DW Pica SC', sans-serif;
  }

  header {
    @apply flex mb-2 items-center bg-gray-800 text-white h-12;
  }

  header > h1 {
    @apply flex-grow leading-none text-xl;
  }

  header > button {
    @apply flex-initial text-white mx-2;
  }

  header button[disabled] {
    @apply text-gray-500;
  }

  section header > h1 {
    @apply mx-2;
  }

  main > section {
    @apply m-2 bg-white border-solid border-2 border-gray-800 ;
  }

  section > ul,
  section > table,
  section > footer,
  section > h2,
  section > p {
    @apply m-2;
  }

  li {
    @apply my-2;
  }

  main  input {
    @apply px-1;
  }

  input[type=text],
  input[type=number] {
    @apply border-b-2 border-solid border-gray-400 bg-gray-100;
  }
</style>