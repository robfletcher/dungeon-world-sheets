<script>
  import {character} from "./store";

  import Stat from "./Stat.svelte";
  import Look from "./Look.svelte";
  import Drives from "./Drives.svelte";
  import Gear from "./Gear.svelte";
  import Combat from "./Combat.svelte";
  import IncrementableValue from "./IncrementableValue.svelte";
  import LevelUp from "./LevelUp.svelte";
  import Move from "./Move.svelte";

  let showLevelUpModal = false;

  $: canLevelUp = $character.xp >= $character.nextLevel && $character.level < 10;
</script>

<header>
  <h1>{$character.name} {$character.characterClass}</h1>

  <IncrementableValue id="level" bind:value={$character.level} readonly={true}>Level</IncrementableValue>
  <IncrementableValue id="xp" bind:value={$character.xp}>Experience</IncrementableValue>

  <button on:click={() => showLevelUpModal = true} disabled={!canLevelUp}>Level Up</button>
</header>

<section id="stats">
  <Stat
    name="Strength"
    debility="Weak"
    bind:stat={$character.strength}/>
  <Stat
    name="Dexterity"
    debility="Shaky"
    bind:stat={$character.dexterity}/>
  <Stat
    name="Constitution"
    debility="Sick"
    bind:stat={$character.constitution}/>
  <Stat
    name="Intelligence"
    debility="Stunned"
    bind:stat={$character.intelligence}/>
  <Stat
    name="Wisdom"
    debility="Confused"
    bind:stat={$character.wisdom}/>
  <Stat
    name="Charisma"
    debility="Scarred"
    bind:stat={$character.charisma}/>
</section>

<Combat/>
<Look/>
<Drives/>
<Gear/>

<section id="moves">
  <header>
    <h1>Moves</h1>
  </header>

  {#each $character.moves as move}
    <Move name={move.name}/>
  {/each}
</section>

<LevelUp bind:show={showLevelUpModal}/>

<style>
  #stats {
    @apply col-span-3 grid grid-cols-3 col-gap-2 row-gap-4 bg-transparent border-none;
  }

  #moves {
    @apply col-span-5 pb-4;
    columns: 3;
    column-gap: 0;
  }

  #moves header {
    column-span: all;
  }

</style>