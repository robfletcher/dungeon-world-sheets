<script>
  import {withDatabase} from './store';
  import {writable} from "svelte/store";

  export let params;
  console.log('character list page', params);
  const game = params.game;
  const characters = writable(params.characters);

  const handleDelete = character => {
    withDatabase((db) => {
      db
        .remove(character)
        .then(_ => {
          characters.update(list => {
            const i = list.findIndex(it => it._id === character._id);
            list.splice(i, 1);
            return list;
          });
        })
        .catch(error => console.error('update failed', error));
    });
  };
</script>

<main class="container">
  <header>
    <h1>{game.name} Characters</h1>
  </header>
  <section class="character-list">
    <ul>
      {#each $characters as character}
        <li>
          <a href="/{game._id}/character/{character._id}">
            <strong>{character.name} {character.characterClass}</strong>
          </a>
          Level: {character.level}
          <button type="button" on:click={() => handleDelete(character)}>Delete</button>
        </li>
      {/each}
    </ul>
    <footer>
      <a href="/{game._id}/create">Create a new character</a>
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