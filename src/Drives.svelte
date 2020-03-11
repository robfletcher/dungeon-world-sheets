<script>
  export let character;
  let editing = false;

  function selectDrive(drive) {
    if (editing) {
      character.drive = drive;
      editing = false;
    }
  }
</script>

<section id="drives" class:editing={editing}>
  <h1>Drives</h1>
  <button on:click={e => editing = true}>Edit</button>
  <ul>
    {#each character.playbook.drives as drive}
      <li on:click={e => selectDrive(drive)}
          class:current={character.drive != null && character.drive.name === drive.name}>
        <h2>{drive.name}</h2>
        <p>{drive.description}</p>
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