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
  <h1>Create a Character</h1>
</header>

<section class="character-creation">
  <form>
    <fieldset class="playbook">
      <legend>Select a playbook</legend>
      <div class="playbook-list">
        {#each playbooks as playbook}
          <label class="playbook-{playbook.name.toLowerCase().replace(' ', '-')}" class:selected={form.characterClass === playbook.name}>
            <input type="radio" bind:group={form.characterClass} value={playbook.name}>
            <span class="playbook-name">{playbook.name}</span>
          </label>
        {/each}
      </div>
      <div class="playbook-description">{@html playbookDescription}</div>
    </fieldset>

    <fieldset class="character-name">
      <legend>Name your character</legend>
      <label>Name:
        <input type="text" bind:value={form.name}>
      </label>
    </fieldset>

    <fieldset class="stats">
      <legend>Assign their stats</legend>
      {#each statNames as statName}
        <label>
          <span class="name">{capitalize(statName)}</span>
          <select bind:value={form[statName]} on:change={statChange}>
            <option value={null}></option>
            {#each statValues as statValue}
              <option value={statValue}>{statValue}</option>
            {/each}
          </select>
          <span class="stat-bonus"
                class:bonus-positive={form[statName] != null && form[statName] >= 9}>{form[statName] == null ? "" : new Stat(form[statName]).bonus}</span>
        </label>
      {/each}
    </fieldset>
  </form>
</section>

<style>
  .character-creation {
    @apply col-span-5;
  }

  .character-creation form {
    @apply grid grid-cols-5 col-gap-2 pb-1;
  }

  fieldset {
    @apply border-2 border-gray-500 border-solid m-4 p-4 pt-2;
  }

  legend {
    @apply text-xl font-bold px-2;
  }

  label {
    @apply text-xl m-2 cursor-pointer;
  }

  .playbook {
    @apply row-span-3 col-span-3;
  }

  .playbook-list {
    @apply grid grid-cols-3 col-gap-2;
  }

  .playbook-list label {
    @apply flex items-center border-2 border-solid border-gray-400 h-12 m-2 px-2;
    break-inside: avoid;
  }

  .playbook-list label.selected {
    @apply border-2 border-gray-800;
  }

  .playbook-list input[type=radio] {
    display: none;
  }

  .playbook-name {
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.25rem;
    white-space: nowrap;
  }

  .playbook-the-barbarian .playbook-name {
    background-image: url('/icons/the-barbarian.svg');
  }

  .playbook-the-bard .playbook-name {
    background-image: url('/icons/the-bard.svg');
  }

  .playbook-the-cleric .playbook-name {
    background-image: url('/icons/the-cleric.svg');
  }

  .playbook-the-druid .playbook-name {
    background-image: url('/icons/the-druid.svg');
  }

  .playbook-the-fighter .playbook-name {
    background-image: url('/icons/the-fighter.svg');
  }

  .playbook-the-immolator .playbook-name {
    background-image: url('/icons/the-immolator.svg');
  }

  .playbook-the-mage .playbook-name {
    background-image: url('/icons/the-mage.svg');
  }

  .playbook-the-paladin .playbook-name {
    background-image: url('/icons/the-paladin.svg');
  }

  .playbook-the-priest .playbook-name {
    background-image: url('/icons/the-priest.svg');
  }

  .playbook-the-ranger .playbook-name {
    background-image: url('/icons/the-ranger.svg');
  }

  .playbook-the-templar .playbook-name {
    background-image: url('/icons/the-templar.svg');
  }

  .playbook-the-thief .playbook-name {
    background-image: url('/icons/the-thief.svg');
  }

  .playbook-the-wizard .playbook-name {
    background-image: url('/icons/the-wizard.svg');
  }

  .playbook-description {
    @apply m-2;
    columns: 2;
    min-height: 10rem;
  }

  .character-name {
    @apply grid items-center col-span-2;
  }

  .character-name label {
    @apply flex;
  }

  .character-name input[type=text] {
    @apply flex-grow ml-2;
  }

  .stats {
    @apply col-span-2 grid grid-cols-2 col-gap-2 row-gap-0;
    justify-items: start;
  }

  .stats label {
    @apply grid grid-cols-3 col-gap-2 row-gap-0 items-center text-xl;
    grid-template-columns: 7rem 4rem 1.5rem;
  }

  .stats .name {
    @apply text-right font-bold;
  }

  .stats select {
    @apply text-center;
  }
</style>