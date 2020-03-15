<script>
  import Modal from './Modal.svelte';
  import Coin from './Coin.svelte';

  import {character} from "./store";
  import {Gear} from "./gear";

  let showModal = false;

  let gearForm = {
    index: -1,
    hasUses: false,
    item: new Gear(),
    tags: ""
  };

  function addGear() {
    gearForm.index = -1;
    gearForm.item = new Gear();
    gearForm.hasUses = false;
    gearForm.tags = "";
    showModal = true;
  }

  function editGear(index, item) {
    gearForm.index = index;
    gearForm.item = item;
    gearForm.hasUses = item.uses != null;
    gearForm.tags = (item.tags || []).join(", ");
    showModal = true;
  }

  function updateGear() {
    if (!gearForm.hasUses) {
      gearForm.item.uses = null;
    }

    gearForm.item.tags = gearForm.tags.split(",").map(it => it.trim());

    character.update(c => {
      if (gearForm.index >= 0) {
        c.gear[gearForm.index] = gearForm.item
      } else {
        c.gear.push(gearForm.item);
      }
      return c;
    });
    showModal = false;
  }

  function incrementUses(index) {
    character.update(c => {
      c.gear[index].uses++;
      return c;
    });
  }

  function decrementUses(index) {
    character.update(c => {
      c.gear[index].uses--;
      return c;
    });
  }

  function removeGear(index) {
    character.update(c => {
      c.gear.splice(index, 1);
      return c;
    });
  }
</script>

<section id="gear">
  <header>
    <h1>Gear</h1>

    <Coin/>

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
      <th>&nbsp;</th>
    </tr>
    </thead>
    <tbody>
    {#each $character.gear as item, i}
      <tr>
          {#if item.uses == null}
            <td class="item" on:click={() => editGear(i, item)} colspan="2">{item.name} <span
              class="tags">{(item.tags || []).join(", ")}</span></td>
          {:else}
            <td class="item" on:click={() => editGear(i, item)}>{item.name} <span
              class="tags">{(item.tags || []).join(", ")}</span></td>
            <td class="uses">
              <button type="button" on:click={() => decrementUses(i)}>-</button>
              <span>{item.uses}</span>
              <button type="button" on:click={() => incrementUses(i)}>+</button>
            </td>
          {/if}
        <td>{item.weight}</td>
        <td>
          <button type="button" on:click={() => removeGear(i)} class="remove">-</button>
        </td>
      </tr>
    {/each}
    </tbody>
  </table>

  <footer>
    <button type="button" on:click={addGear} class="remove">Add</button>
  </footer>
</section>

{#if showModal}
  <Modal on:cancel={() => showModal = false} on:ok={updateGear}>
    <h1 slot="header">Manage Gear</h1>

    <fieldset>
      <label>
        <span>Item:</span>
        <input type="text" bind:value={gearForm.item.name} class="focus:outline-none focus:shadow-outline">
      </label>

      <label>
        <span>Tags:</span>
        <input type="text" bind:value={gearForm.tags} class="focus:outline-none focus:shadow-outline">
      </label>

      <label>
        <span>Has uses?</span>
        <input type="checkbox" bind:checked={gearForm.hasUses}>
      </label>

      <label>
        <span>Uses:</span>
        <input type="number" min="0" bind:value={gearForm.item.uses} disabled={!gearForm.hasUses}>
      </label>

      <label>
        <span>Weight:</span>
        <input type="number" min="0" bind:value={gearForm.item.weight}>
      </label>
    </fieldset>
  </Modal>
{/if}

<style>
  #gear {
    @apply col-span-3;
  }

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

  .item {
    @apply cursor-pointer;
  }

  .uses {
    @apply whitespace-no-wrap;
  }

  .uses button, .uses span {
    @apply inline-block align-middle w-6 text-center;
  }

  .tags {
    @apply text-xs;
  }

  button.remove {
    @apply ml-4;
  }

  footer {
    @apply text-right;
  }

  fieldset {
    @apply grid grid-cols-1 row-gap-2 m-2;
  }

  fieldset > label {
    @apply grid col-gap-2;
    grid-template-columns: 5rem auto;
  }

  label > :first-child {
    @apply text-right;
  }
</style>