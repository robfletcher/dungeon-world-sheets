<script>
  import {allCharacters, deleteCharacter} from "./database";
  import {onMount} from "svelte";

  $: characterList = [];

  const refreshCharacterList = () => {
    allCharacters().then(list => {
      characterList = list
    });
  };

  const handleDelete = (id) => {
    deleteCharacter(id)
      .then(refreshCharacterList);
  };

  onMount(refreshCharacterList);
</script>

<main class="container">
  <header>
    <h1>Dungeon World Characters</h1>
  </header>
  <section class="character-list">
    <ul>
      {#each characterList as character}
        <li>
          <a href="/character/{character._id}">
            <strong>{character.name} {character.characterClass}</strong>
          </a>
          Level: {character.level}
          <button type="button" on:click={() => handleDelete(character._id)}>Delete</button>
        </li>
      {/each}
    </ul>
    <footer>
      <a href="/create">Create a new character</a>
    </footer>
  </section>
</main>

<style>
  .character-list {
    @apply col-span-5;
  }

  .character-list ul {
    @apply px-6 py-4;
  }

  .character-list li {
    @apply grid grid-cols-3 text-xl ;
  }

  footer {
    @apply flex items-center justify-end col-span-5 h-16 px-6;
  }

  footer button,
  footer a {
    @apply text-2xl;
  }

  footer button[disabled] {
    @apply text-gray-500;
  }
</style>