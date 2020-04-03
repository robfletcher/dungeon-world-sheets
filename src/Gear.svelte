<script>
  import Modal from './Modal.svelte';
  import {Gear, standardGear} from "./gear";
  import IncrementableValue from "./IncrementableValue.svelte";

  export let character;

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
      if (c.gear[index].uses > 0) {
        c.gear[index].uses--;
      }
      return c;
    });
  }

  function removeGear(index) {
    character.update(c => {
      c.gear.splice(index, 1);
      return c;
    });
  }

  function chooseGear() {
    gearForm.hasUses = gearForm.item.uses != null;
    gearForm.tags = gearForm.item.tags.join(', ');
  }
</script>

<section id="gear">
  <header>
    <h1>Gear</h1>

    <IncrementableValue id="coin" bind:value={$character.coin}>Coin</IncrementableValue>
    <IncrementableValue id="load" value={$character.load} max={$character.maxLoad} readonly={true}>Load
    </IncrementableValue>
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
            <button type="button" on:click={() => decrementUses(i)} disabled={item.uses < 1}>-</button>
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
      <legend>Select standard gear</legend>
      <select bind:value={gearForm.item} on:change={chooseGear}>
        <option value={null}></option>
        {#each standardGear as group}
          <optgroup label="{group.group}">
            {#each group.items as item}
              <option value={item}>{item.name}</option>
            {/each}
          </optgroup>
        {/each}
      </select>
    </fieldset>

    <fieldset>
      <legend>Or&hellip;</legend>
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
    @apply relative col-span-2;
  }

  #load .value {
    @apply whitespace-no-wrap text-2xl;
  }

  #load .current {
    @apply -mt-4;
  }

  #load .max {
    @apply -mb-2;
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

  button[disabled] {
    @apply text-gray-400;
  }

  footer {
    @apply text-right;
  }

  fieldset {
    @apply grid grid-cols-1 row-gap-2 m-2 border-t border-gray-400;
  }

  legend {
    @apply px-2 mx-auto;
  }

  fieldset > label {
    @apply grid col-gap-2;
    grid-template-columns: 5rem auto;
  }

  label > :first-child {
    @apply text-right;
  }

  label input[type=checkbox] {
    justify-self: start;
  }
</style>