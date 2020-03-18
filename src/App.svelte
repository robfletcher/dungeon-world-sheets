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
    font-family: 'IM Fell English', sans-serif;
  }

  h1 {
    font-family: 'IM Fell English SC', sans-serif;
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

  section header > h1 {
    @apply mx-2;
  }

  main > section {
    @apply relative m-2 bg-white border-solid border-2 border-gray-800 ;
  }

  header .labelled-score {
    @apply flex-initial my-0;
  }

  .labelled-score {
    @apply flex items-center bg-transparent m-2 relative;
  }

  .labelled-score h1 {
    @apply mr-2 bg-gray-800 text-white;
  }

  .labelled-score .value {
    @apply flex items-center justify-center h-16 w-16 text-3xl bg-white text-black border-solid border-2 border-gray-800 rounded-full;
  }

  .labelled-score .increment-decrement {
    @apply flex flex-col;
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