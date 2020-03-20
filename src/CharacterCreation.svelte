<script>
  import {playbooks} from "./Playbooks";
  import {character} from "./store";
  import {Stat} from "./stat";

  const statNames = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
  const statValues = [16, 15, 13, 12, 9, 8];

  let form = {};
  statNames.forEach((it, i) => form[it] = null);

  $: playbookDescription = form.characterClass == null ? null : playbooks.find(it => it.name === form.characterClass).description || "<p>No description</p>";

  const statChange = (event) => {
    const selectElements = [...event.target.form.getElementsByTagName("select")];
    let usedValues = [];
    selectElements.forEach(it => {
      if (it.value !== "null") {
        usedValues.push(it.value);
      }
    });
    selectElements.forEach(it => {
      [...it.options].forEach(option => {
        option.disabled = option.value !== it.value && usedValues.indexOf(option.value) >= 0;
      });
    });
  };

  $: valid = form.name != null && form.name.length > 0 && statNames.every(it => form[it] != null) && form.characterClass != null;

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
</script>

<header>
  <h1>Create a Character {valid}</h1>
</header>

<section class="character-creation">
  <form>
  <fieldset class="playbook">
    <legend>Select playbook</legend>
    <div class="playbook-list">
      {#each playbooks as playbook}
        <label class:selected={form.characterClass === playbook.name}>
          <input type="radio" bind:group={form.characterClass} value={playbook.name}>
          {playbook.name}
        </label>
      {/each}
    </div>
    <div class="playbook-description">{@html playbookDescription}</div>
  </fieldset>

  <fieldset>
    <label>Name:
      <input type="text" bind:value={form.name}>
    </label>
  </fieldset>

  <fieldset class="stats">
    <legend>Assign stats</legend>
    {#each statNames as statName}
      <label>
        <span class="name">{capitalize(statName)}</span>
        <select bind:value={form[statName]} on:change={statChange}>
          <option value={null}>-</option>
          {#each statValues as statValue}
            <option value={statValue}>{statValue}</option>
          {/each}
        </select>
        <span class="stat-bonus" class:bonus-positive={form[statName] != null && form[statName] >= 9}>{new Stat(form[statName] || 9).bonus}</span>
      </label>
    {/each}
  </fieldset>
  </form>
</section>

<style>
  .character-creation {
    @apply col-span-5 flex flex-col;
  }

  .playbook-description {
    @apply mt-2;
    columns: 2;
  }

  .playbook-description p {
    @apply mb-2;
    break-inside: avoid;
  }

  fieldset {
    @apply border-2 border-gray-500 border-solid m-4 p-4;
  }

  legend {
    @apply text-xl font-bold px-2;
  }

  label {
    @apply text-xl my-2 cursor-pointer;
  }

  .playbook {
    @apply grid grid-cols-2 col-gap-2;
  }

  .playbook-list {
    @apply grid grid-cols-3 col-gap-2;
  }

  .playbook-list label {
    @apply flex items-center border-2 border-solid border-gray-400 h-12 m-2 px-4;
    break-inside: avoid;
  }

  .playbook-list label.selected {
    @apply border-2 border-gray-800;
  }

  .playbook-list input[type=radio] {
    display: none;
  }

  .stats label {
    @apply grid grid-cols-3 col-gap-2 row-gap-0 text-xl;
    grid-template-columns: 8rem 3rem 1.5rem;
  }

  .stats .name {
    @apply font-bold;
  }

</style>
