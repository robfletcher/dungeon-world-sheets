<script>
  import Tailwindcss from './Tailwindcss.svelte';

  import {playbooks} from "./Playbooks";
  import {character} from "./store";

  import CharacterCreation from "./CharacterCreation.svelte";
  import CharacterSheet from "./CharacterSheet.svelte";
</script>

<Tailwindcss/>

<main class="container">
{#if $character == null}
  <CharacterCreation/>
{:else}
  <CharacterSheet/>
{/if}
</main>

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
    @apply flex-grow leading-none text-2xl;
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

  main.container {
    @apply grid grid-cols-5 bg-gray-200 my-4 pb-1;
  }

  main > header {
    @apply col-span-5 mb-6;
  }

  main > header > h1 {
    @apply text-4xl mx-4;
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

  main input {
    @apply px-1;
  }

  input[type=text],
  input[type=number] {
    @apply border-b-2 border-solid border-gray-400 bg-gray-100;
  }

  .bonus-positive:before {
    content: '+';
  }

  .playbook-description p {
    @apply mb-3;
  }

  /* move rendering */
  .move p, .move ul {
    @apply mb-2;
  }

  .move h2 {
    @apply font-bold text-2xl;
  }

  .move h3 {
    @apply font-bold mt-2;
  }

  .move li {
    @apply list-disc list-inside m-0;
  }

  .move li ul {
    @apply ml-6;
  }

  .move dt {
    @apply float-left font-bold mr-1;
  }

  .move .move-options li {
    @apply list-none;
  }

  .move .move-options li:before {
    @apply text-lg leading-none;
    content: '\2610\0a';
  }

  .move .move-options-inline {
    @apply inline ml-4;
  }

  .move .move-options-inline li {
    @apply inline mr-2;
  }

  .move .move-options li.move-option-custom-value:before,
  .move .move-options li.move-option-interactive:before {
    content: none;
  }

  .move .move-options li.move-option-custom-value:after {
    content: '\0a____';
  }

  .move .move-options li.move-option-custom-value.move-option-interactive:after {
    content: none;
  }
</style>