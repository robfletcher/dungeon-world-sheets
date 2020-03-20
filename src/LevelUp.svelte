<script>
  import {character, selectedMove} from "./store";
  import {Stat} from "./stat";
  import Modal from "./Modal.svelte";
  import Moves from "./Moves.svelte";

  export let show = false;

  let stat = null;
  let move = null;

  $: valid = stat != null && move != null;

  const statNames = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
  let stats = {
    strength: new Stat($character.strength.value),
    dexterity: new Stat($character.dexterity.value),
    constitution: new Stat($character.constitution.value),
    intelligence: new Stat($character.intelligence.value),
    wisdom: new Stat($character.wisdom.value),
    charisma: new Stat($character.charisma.value)
  };

  const computeStatChange = () => {
    statNames.forEach(n => {
      stats[n] = new Stat($character[n].value + (stat === n ? 1 : 0));
    });
  };

  const levelUp = () => {
    character.update(c => {
      c.xp -= c.nextLevel;
      c.level++;
      c[stat].value++;
      c.moves.push({name: move});
      return c;
    });
    stat = null;
    selectedMove.set(null);
    show = false;
  };

  const cancel = () => {
    stat = null;
    selectedMove.set(null);
    show = false;
  };

  const selectMove = (event) => {
    move = event.detail;
  };

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
</script>

{#if show}
  <Modal on:cancel={cancel} on:ok={levelUp} bind:valid={valid}>
    <h1 slot="header">Level Up</h1>

    <form>
      <fieldset class="stats">
        <legend>Select one stat to increase:</legend>
          {#each statNames as statName}
            <label>
              <input type="radio" bind:group={stat} value={statName} on:change={computeStatChange}
                     disabled={stats[statName].value > 17}>
              <span class="name">{capitalize(statName)}</span>
              <span class="score">{stats[statName].value}</span>
              <span class="bonus" class:bonus-positive={stats[statName].bonus >= 0}>{stats[statName].bonus}</span>
            </label>
          {/each}
      </fieldset>

      <fieldset>
        <legend>Select a new move:</legend>

        <Moves mode="select" bind:selected={move} on:select-move={selectMove}/>
      </fieldset>
    </form>
  </Modal>
{/if}

<style>
  legend {
    @apply text-xl;
  }

  .stats fieldset {
    @apply flex flex-col m-2;
  }

  .stats label {
    @apply grid grid-cols-4 col-gap-2 row-gap-0 text-xl;
    grid-template-columns: 1.5rem 8rem 1.5rem 1.5rem;
  }

  .stats .name {
    @apply font-bold;
  }

  .stats label input[type=radio] {
    justify-self: center;
    align-self: center;
  }
</style>