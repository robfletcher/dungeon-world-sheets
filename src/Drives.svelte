<script>
  export let character;
  let editing = false;

  function selectDrive(drive) {
    character.drive = drive;
    editing = false;
  }
</script>

<section id="drives" class:editing={editing}>
  <h1>Drives</h1>
  <button on:click={e => editing = true}>Edit</button>
  <ul>
    {#each character.playbook.drives as drive}
      <li on:click={e => selectDrive(drive)}
          class:selected={character.drive != null && character.drive.name === drive.name}>
        <h2>{drive.name}</h2>
        <p>{drive.description}</p>
      </li>
    {/each}
  </ul>
  <div class="current">
    <h2>{character.drive.name}</h2>
    <p>{character.drive.description}</p>
  </div>
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

  ul, .current {
    @apply mx-2;
  }

  ul {
    @apply hidden;
  }

  .editing ul {
    @apply block
  }

  .editing .current {
    @apply hidden;
  }

  li {
    @apply cursor-pointer;
  }

  h2 {
    @apply font-bold mt-2;
  }
</style>