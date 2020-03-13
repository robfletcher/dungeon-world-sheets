<script>
  import {character} from "./character";

  let editing = false;

  function selectDrive(it) {
    if (editing) {
      $character.drive = it;
      editing = false;
    }
  }
</script>

<section id="drives" class:editing={editing}>
  <header>
    <h1>Drives</h1>
    <button on:click={e => editing = true}>Edit</button>
  </header>
  <ul>
    {#each $character.playbook.drives as it}
      <li on:click={e => selectDrive(it)}
          class:current={$character.drive != null && $character.drive.name === it.name}>
        <h2>{it.name}</h2>
        <p>{it.description}</p>
      </li>
    {/each}
  </ul>
</section>

<style>
  .selected {
    color: red;
  }

  ul {
    @apply m-2;
  }

  li {
    @apply my-2;
  }

  li:not(.current) {
    @apply hidden;
  }

  .editing li {
    @apply block cursor-pointer;
  }

  h2 {
    @apply font-bold;
  }
</style>