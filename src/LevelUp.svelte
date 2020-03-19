<script>
  import {character} from "./store";
  import {Stat} from "./stat";
  import Modal from "./Modal.svelte";
  import Moves from "./Moves.svelte";

  export let show = false;

  let stat = null;
  let move = null;

  let stats = {
    strength: new Stat($character.strength.value),
    dexterity: new Stat($character.dexterity.value),
    constitution: new Stat($character.constitution.value),
    intelligence: new Stat($character.intelligence.value),
    wisdom: new Stat($character.wisdom.value),
    charisma: new Stat($character.charisma.value)
  };

  const computeStatChange = () => {
    ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"].forEach(n => {
      stats[n] = new Stat($character[n].value + (stat === n ? 1 : 0));
    });
  };

  const levelUp = () => {
    show = false;
  };

  const selectMove = (event) => {
    move = event.detail;
    console.log("selected", move);
  };
</script>

{#if show}
  <Modal on:cancel={() => show = false} on:ok={levelUp}>
    <h1 slot="header">Level Up</h1>

    <form>
      <section class="stats">
        <h2>Select one stat to increase:</h2>
        <fieldset>
          <label>
            <input type="radio" bind:group={stat} value="strength" on:change={computeStatChange}>
            <span class="name">Strength</span>
            <span class="score">{stats.strength.value}</span>
            <span class="bonus" class:positive={stats.strength.bonus >= 0}>{stats.strength.bonus}</span>
          </label>
          <label>
            <input type="radio" bind:group={stat} value="dexterity" on:change={computeStatChange}>
            <span class="name">Dexterity</span>
            <span class="score">{stats.dexterity.value}</span>
            <span class="bonus" class:positive={stats.dexterity.bonus >= 0}>{stats.dexterity.bonus}</span>
          </label>
          <label>
            <input type="radio" bind:group={stat} value="constitution" on:change={computeStatChange}>
            <span class="name">Constitution</span>
            <span class="score">{stats.constitution.value}</span>
            <span class="bonus" class:positive={stats.constitution.bonus >= 0}>{stats.constitution.bonus}</span>
          </label>
          <label>
            <input type="radio" bind:group={stat} value="intelligence" on:change={computeStatChange}>
            <span class="name">Intelligence</span>
            <span class="score">{stats.intelligence.value}</span>
            <span class="bonus" class:positive={stats.intelligence.bonus >= 0}>{stats.intelligence.bonus}</span>
          </label>
          <label>
            <input type="radio" bind:group={stat} value="wisdom" on:change={computeStatChange}>
            <span class="name">Wisdom</span>
            <span class="score">{stats.wisdom.value}</span>
            <span class="bonus" class:positive={stats.wisdom.bonus >= 0}>{stats.wisdom.bonus}</span>
          </label>
          <label>
            <input type="radio" bind:group={stat} value="charisma" on:change={computeStatChange}>
            <span class="name">Charisma</span>
            <span class="score">{stats.charisma.value}</span>
            <span class="bonus" class:positive={stats.charisma.bonus >= 0}>{stats.charisma.bonus}</span>
          </label>
        </fieldset>
      </section>

      <section>
        <h2>Select a new move:</h2>

        <Moves mode="select" bind:selected={move} on:select-move={selectMove}/>
      </section>
    </form>
  </Modal>
{/if}

<style>
  h2 {
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

  .stats .positive:before {
    content: '+';
  }
</style>