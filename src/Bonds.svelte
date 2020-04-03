<script>
  import Modal from "./Modal.svelte";
  import {character} from "./store.js";

  let showModal = false;
  let index = -1;
  let bond = '';

  const editBond = i => {
    index = i;
    bond = $character.bonds[i];
    showModal = true;
  };

  const addBond = () => {
    index = -1;
    bond = '';
    showModal = true;
  };

  const updateBonds = () => {
    character.update(c => {
      if (index < 0) {
        c.bonds.push(bond);
      } else {
        c.bonds[index] = bond;
      }
      return c;
    });
    showModal = false;
  };

  const deleteBond = () => {
    character.update(c => {
      c.bonds.splice(index, 1);
      return c;
    });
    showModal = false;
  };

  const selectBond = event => {
    bond = event.target.value;
  };
</script>

<section id="bonds">
  <header>
    <h1>Bonds</h1>
    <button on:click={addBond}>Add</button>
  </header>
  {#each $character.bonds as bond, i}
    <p on:click={() => editBond(i)}>{bond}</p>
  {/each}
</section>

{#if showModal}
  <Modal on:cancel={() => showModal = false} on:ok={updateBonds}>
    <h1 slot="header">{#if index < 0}Add{:else}Edit{/if} Bond</h1>
    {#if index < 0}
      <fieldset class="with-legend">
        <legend>Select a template to edit</legend>
        <select on:change={selectBond}>
          <option value=""></option>
          {#each $character.playbook.bonds as it}
            <option value={it}>{it}</option>
          {/each}
        </select>
      </fieldset>
      <fieldset class="with-legend">
        <legend>&hellip;or define your own</legend>
        <textarea bind:value={bond}></textarea>
      </fieldset>
    {:else}
      <fieldset>
        <textarea bind:value={bond}></textarea>
      </fieldset>
    {/if}
    <button slot="buttons" on:click={deleteBond} disabled={index < 0}>Delete</button>
  </Modal>
{/if}

<style>
  p {
    cursor: pointer;
  }

  fieldset {
    @apply grid grid-cols-1 row-gap-2 m-2;
  }

  fieldset.with-legend {
    @apply border-t border-gray-400;
  }

  legend {
    @apply px-2 mx-auto;
  }

  fieldset select, fieldset textarea {
    @apply border border-solid border-gray-400 px-2 py-1;
  }

  fieldset select {
    text-overflow: ellipsis;
  }
</style>
