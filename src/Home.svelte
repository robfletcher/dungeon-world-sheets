<script>
  import {allCharacters} from "./database";

  let promise = allCharacters();
</script>

<main class="container">
  <header>
    <h1>Dungeon World Characters</h1>
  </header>
  <section class="character-list">
    {#await promise}
      <p>Loading characters&hellip;</p>
    {:then characters}
      <ul>
        {#each characters as character}
          <li>
            <a href="/character/{character.id}">
            <strong>{character.name} {character.characterClass}</strong>
            </a>
            Level: {character.level}
          </li>
        {/each}
      </ul>
    {/await}
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
    @apply grid grid-cols-2 text-xl ;
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