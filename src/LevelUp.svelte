<script>
  import {character} from "./store";
  import {Stat} from "./stat";
  import Modal from "./Modal.svelte";

  export let show = false;

  let selectedStat = null;
  let selectedMove = null;

  $: valid = selectedStat != null && move != null;

  const statNames = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
  let stats = {
    strength: new Stat($character.strength.value),
    dexterity: new Stat($character.dexterity.value),
    constitution: new Stat($character.constitution.value),
    intelligence: new Stat($character.intelligence.value),
    wisdom: new Stat($character.wisdom.value),
    charisma: new Stat($character.charisma.value)
  };

  const availableMoves = $character.playbook.moves
    .filter(move => !$character.moves.map(it => it.name).includes(move.name))
    .filter(move => move.requiresLevel === undefined || ($character.level + 1) >= move.requiresLevel)
    .filter(move => move.requiresMove === undefined || $character.moves.some(it => it.name === move.requiresMove))
    .filter(move => move.replacesMove === undefined || $character.moves.some(it => it.name === move.replacesMove));

  const computeStatChange = () => {
    statNames.forEach(n => {
      stats[n] = new Stat($character[n].value + (selectedStat === n ? 1 : 0));
    });
  };

  const levelUp = () => {
    character.update(c => {
      c.xp -= c.nextLevel;
      c.level++;
      c[selectedStat].value++;
      c.moves.push({name: selectedMove});
      return c;
    });
    selectedStat = null;
    selectedMove = null;
    show = false;
  };

  const cancel = () => {
    selectedStat = null;
    selectedMove = null;
    show = false;
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
            <input type="radio" bind:group={selectedStat} value={statName} on:change={computeStatChange}
                   disabled={stats[statName].value > 17}>
            <span class="name">{capitalize(statName)}</span>
            <span class="score">{stats[statName].value}</span>
            <span class="bonus" class:bonus-positive={stats[statName].bonus >= 0}>{stats[statName].bonus}</span>
          </label>
        {/each}
      </fieldset>

      <fieldset>
        <legend>Select a new move:</legend>
        {#each availableMoves as move}
          <div class="move move-select">
            <input type="radio" bind:group={selectedMove} value={move.name} class="move-selector">
            <article>
              <h2>{move.name}</h2>
              {#if move.requiresMove !== undefined}
                <p><em>Requires: {move.requiresMove}</em></p>
              {/if}
              {#if move.replacesMove !== undefined}
                <p><em>Replaces: {move.replacesMove}</em></p>
              {/if}
              {@html move.description}
            </article>
          </div>
        {/each}
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