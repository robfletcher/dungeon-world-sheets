<script>
  import Modal from "./Modal.svelte";

  export let character;

  let showModal = false;

  let selectedDrive;
  let customDrive;

  function editDrive() {
    selectedDrive = $character.playbook.drives
      .map(it => it.name)
      .indexOf($character.drive.name);

    if (selectedDrive === -1) {
      customDrive = $character.drive;
    } else {
      customDrive = {};
    }

    showModal = true;
  }

  function updateDrive() {
    character.update(c => {
      c.drive = selectedDrive >= 0 ? $character.playbook.drives[selectedDrive] : customDrive;
      return c;
    });
    showModal = false;
  }
</script>

<section id="drive">
  <header>
    <h1>Drive</h1>
    <button on:click={editDrive}>Edit</button>
  </header>
  <h2>{$character.drive.name || ""}</h2>
  <p>{$character.drive.description || ""}</p>
</section>

{#if showModal}
  <Modal on:cancel={() => showModal = false} on:ok={updateDrive}>
    <h1 slot="header">Edit Drive</h1>
    <fieldset>
        {#each $character.playbook.drives as it, i}
          <label>
            <input type="radio" name="drive" bind:group={selectedDrive} value={i}>
            <span class="title">{it.name}</span>
            <span class="description">{it.description}</span>
          </label>
        {/each}
      <label>
        <input type="radio" name="drive" bind:group={selectedDrive} value={-1}>
        <label><input type="text" bind:value={customDrive.name} placeholder="Define your own" on:focus={() => selectedDrive = -1}></label>
        <label><input type="text" bind:value={customDrive.description} on:focus={() => selectedDrive = -1}></label>
      </label>
    </fieldset>
  </Modal>
{/if}

<style>
  fieldset {
    @apply grid grid-cols-1 row-gap-2 m-2;
  }

  fieldset > label {
    @apply grid col-gap-2;
    grid-template-columns: 1rem auto;
  }

  input[type=radio] {
    @apply row-span-2;
    justify-self: start;
  }

  input[type=text] {
    @apply mb-2 w-full;
  }

  .title, .description {
    @apply block;
  }

  h2, .title {
    @apply font-bold;
  }
</style>