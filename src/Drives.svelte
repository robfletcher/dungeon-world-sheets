<script>
  import {drive, playbook} from "./character";

  let editing = false;

  function selectDrive(it) {
    if (editing) {
      drive.set(it);
      editing = false;
    }
  }
</script>

<section id="drives" class:editing={editing}>
  <h1>Drives</h1>
  <button on:click={e => editing = true}>Edit</button>
  <ul>
    {#each $playbook.drives as it}
      <li on:click={e => selectDrive(it)}
          class:current={$drive != null && $drive.name === it.name}>
        <h2>{it.name}</h2>
        <p>{it.description}</p>
      </li>
    {/each}
  </ul>
</section>

<style>
  #drives {
    @apply py-2 bg-gray-200 relative;
  }

  button {
    @apply absolute text-white;
    right: 0.5rem;
    top: 1rem;
  }

  .selected {
    color: red;
  }

  h1 {
    @apply flex items-center h-10 px-2;
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