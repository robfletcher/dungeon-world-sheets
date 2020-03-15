<script>
  import {character} from "./store";

  import Stat from "./Stat.svelte";
  import Look from "./Look.svelte";
  import Drives from "./Drives.svelte";
  import Gear from "./Gear.svelte";
  import Moves from "./Moves.svelte";
</script>

<main class="container">
  <header>
    <h1>{$character.name} {$character.characterClass}</h1>

    <section id="level" class="labelled-score">
      <h1>Level</h1>
      <div class="value">{$character.level}</div>
    </section>

    <section id="xp" class="labelled-score">
      <h1>Experience</h1>
      <div class="value">{$character.xp}</div>
    </section>
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

  <section id="combat">
    <header>
      <section id="hit-points" class="labelled-score">
        <h1>Hit Points</h1>
        <div class="value">{$character.hitPointsCurrent}</div>
      </section>

      <section id="damage-die" class="labelled-score">
        <h1>Damage Die</h1>
        <div
          class="value d{$character.playbook.damageDieFaces}">{$character.playbook.damageDieFaces}</div>
      </section>

      <section id="armor" class="labelled-score">
        <h1>Armor</h1>
        <div class="value">{$character.armor}</div>
      </section>
    </header>
  </section>

  <Look/>
  <Drives/>
  <Gear/>
  <Moves/>
</main>

<style>
  main {
    @apply grid grid-cols-5 bg-gray-200 mt-4;
  }

  main > header {
    @apply col-span-5 mb-6;
  }

  main > header > h1 {
    @apply text-4xl mx-4;
  }

  #stats {
    @apply col-span-3 grid grid-cols-3 col-gap-2 row-gap-4 bg-transparent border-none;
  }

  #combat {
    @apply col-span-2;
  }

  #damage-die .value {
    color: transparent;
    background-image: url('/dice.png');
    background-size: cover;
    background-position-x: -63px;
    background-position-y: 0px;
  }

  #damage-die .d4 {
    background-position-x: 5px;
    background-position-y: -3px;
  }

  #damage-die .d8 {
    background-position-x: 124px;
    background-position-y: 0px;
  }

  #damage-die .d10 {
    background-position-x: 60px;
    background-position-y: 0px;
  }

  #damage-die .value:before {
    content: 'D';
  }
</style>