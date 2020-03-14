<script>
  import Modal from './Modal.svelte';

  import {character, InventoryItem} from "./character";

  let showModal = false;

  let itemForm = {
    index : -1,
    hasUses: false,
    item: new InventoryItem()
  };

  function openAddItem() {
    itemForm.index = -1;
    itemForm.item = new InventoryItem();
    itemForm.hasUses = false;
    showModal = true;
  }

  function openEditItem(index, item) {
    itemForm.index = index;
    itemForm.item = item;
    itemForm.hasUses = item.uses != null;
    showModal = true;
  }

  function addItem() {
    if (!itemForm.hasUses) {
      itemForm.item.uses = null;
    }

    character.update(c => {
      if (itemForm.index >= 0) {
        c.gear[itemForm.index] = itemForm.item
      } else {
        c.gear.push(itemForm.item);
      }
      return c;
    });
    showModal = false;
  }
</script>

<section id="gear">

  <header>
    <h1>Gear</h1>

    <section id="load" class="labelled-score">
      <h1>Load</h1>
      <div class="value">{$character.load}</div>
    </section>

    <section id="max-load" class="labelled-score">
      <h1>Max Load</h1>
      <div class="value">{$character.maxLoad}</div>
    </section>
  </header>

  <table>
    <thead>
    <tr>
      <th>&nbsp;</th>
      <th>uses</th>
      <th>weight</th>
    </tr>
    </thead>
    <tbody>
    {#each $character.gear as item, i}
      <tr on:click={e=> openEditItem(i, item)}>
          {#if item.uses !== null}
            <td>{item.name}</td>
            <td>{item.uses}</td>
          {:else}
            <td colspan="2">{item.name}</td>
          {/if}
        <td>{item.weight}</td>
      </tr>
    {/each}
    </tbody>
  </table>

  <footer>
    <button type="button" on:click={openAddItem}>Add</button>
  </footer>
</section>

{#if showModal}
  <Modal on:cancel={() => showModal = false} on:ok={addItem}>
    <h2 slot="header">Add to Gear</h2>

    <fieldset>
      <label>
        Item:
        <input type="text" bind:value={itemForm.item.name}>
      </label>
    </fieldset>

    <fieldset>
      <label>
        Has uses?
        <input type="checkbox" bind:checked={itemForm.hasUses}>
      </label>

      <label>
        Uses:
        <input type="range" min="0" max="10" bind:value={itemForm.item.uses} disabled={!itemForm.hasUses}>
        <span>{itemForm.item.uses}</span>
      </label>
    </fieldset>

    <fieldset>
      <label>
        Weight:
        <input type="range" min="0" max="5" bind:value={itemForm.item.weight}>
        <span>{itemForm.item.weight}</span>
      </label>
    </fieldset>

    <fieldset>
      <label>
        Armor:
        <input type="range" min="0" max="5" bind:value={itemForm.item.armor}>
        <span>{itemForm.item.armor}</span>
      </label>
    </fieldset>
  </Modal>
{/if}

<style>
  table {
    @apply table-auto border-separate;
  }

  td {
    @apply text-right;
  }

  td:first-child {
    @apply text-left;
  }

  th:first-child, td:first-child {
    width: 100%;
  }

  footer {
    @apply text-right;
  }
</style>