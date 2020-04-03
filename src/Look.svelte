<script>
  import Modal from "./Modal.svelte";

  export let character;

  let showModal = false;
  let look = {};

  function edit() {
    look = $character.look;
    showModal = true;
  }

  function save() {
    character.update(c => {
      c.look = look;
      return c;
    });
    showModal = false;
  }
</script>

<section id="look" class:editing={showModal}>
  <header>
    <h1>Look</h1>
    <button type="button" on:click={edit}>Edit</button>
  </header>
  <ul>
      {#each $character.playbook.looks as { category, _ }}
        <li>
          <span class="category">{category}:</span>
          <span class="look">{$character.look[category] || ''}</span>
        </li>
      {/each}
  </ul>
</section>

{#if showModal}
  <Modal on:cancel={() => showModal = false} on:ok={save}>
    <h1 slot="header">Manage Look</h1>
    <fieldset>
      {#each $character.playbook.looks as { category, suggestions }}
        <label>
          <span>{category}:</span>
          <input type="text"
                 placeholder={suggestions}
                 bind:value={look[category]}>
        </label>
      {/each}
    </fieldset>
  </Modal>
{/if}

<style>
  .category, .look {
    @apply inline-block align-middle;
  }

  .category {
    @apply font-bold;
  }

  fieldset {
    @apply grid grid-cols-1 row-gap-2 m-2;
  }

  fieldset > label {
    @apply grid col-gap-2;
    grid-template-columns: 5rem auto;
  }

  label > span {
    @apply text-right;
  }
</style>