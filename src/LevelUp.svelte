<script>
  import {character} from "./store";
  import {Stat} from "./stat";
  import Modal from "./Modal.svelte";
  import Moves from "./Moves.svelte";

  export let show = false;

  let stat = null;
  let stats = {
    strength: new Stat($character.strength.value),
    dexterity: new Stat($character.dexterity.value),
    constitution: new Stat($character.constitution.value),
    intelligence: new Stat($character.intelligence.value),
    wisdom: new Stat($character.wisdom.value),
    charisma: new Stat($character.charisma.value)
  };

  function computeStatChange() {
    ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"].forEach(n => {
      stats[n] = new Stat($character[n].value + (stat === n ? 1 : 0));
    });
  }

  function levelUp() {
    show = false;
  }
</script>

{#if show}
  <Modal on:cancel={() => show = false} on:ok={levelUp}>
    <h1 slot="header">Level Up</h1>

    <section class="stats">
      <h2>Select one stat to increase:</h2>
      <fieldset>
        <label>
          <input type="radio" bind:group={stat} value="strength" on:change={computeStatChange}> Strength
          <span class="score">{stats.strength.value}</span>
          <span class="bonus" class:positive={stats.strength.bonus >= 0}>{stats.strength.bonus}</span>
        </label>
        <label>
          <input type="radio" bind:group={stat} value="dexterity" on:change={computeStatChange}> Dexterity
          <span class="score">{stats.dexterity.value}</span>
          <span class="bonus" class:positive={stats.dexterity.bonus >= 0}>{stats.dexterity.bonus}</span>
        </label>
        <label>
          <input type="radio" bind:group={stat} value="constitution" on:change={computeStatChange}> Constitution
          <span class="score">{stats.constitution.value}</span>
          <span class="bonus" class:positive={stats.constitution.bonus >= 0}>{stats.constitution.bonus}</span>
        </label>
        <label>
          <input type="radio" bind:group={stat} value="intelligence" on:change={computeStatChange}> Intelligence
          <span class="score">{stats.intelligence.value}</span>
          <span class="bonus" class:positive={stats.intelligence.bonus >= 0}>{stats.intelligence.bonus}</span>
        </label>
        <label>
          <input type="radio" bind:group={stat} value="wisdom" on:change={computeStatChange}> Wisdom
          <span class="score">{stats.wisdom.value}</span>
          <span class="bonus" class:positive={stats.wisdom.bonus >= 0}>{stats.wisdom.bonus}</span>
        </label>
        <label>
          <input type="radio" bind:group={stat} value="charisma" on:change={computeStatChange}> Charisma
          <span class="score">{stats.charisma.value}</span>
          <span class="bonus" class:positive={stats.charisma.bonus >= 0}>{stats.charisma.bonus}</span>
        </label>
      </fieldset>
    </section>

    <section>
      <h2>Select a new move:</h2>

      <Moves/>
    </section>
  </Modal>
{/if}

<style>
.stats fieldset {
  @apply flex flex-col;
}

  .stats .positive:before {
    content: '+';
  }
</style>