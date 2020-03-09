<script>
  import Stat from "./Stat.svelte";

  export let character;
</script>

<main class="container">
  <header>
    <h1>{character.name} {character.playbook.name}</h1>
  </header>

  <section id="stats">
    <Stat
      name="Strength"
      debility="Weak"
      bind:score={character.stats.strength}/>
    <Stat
      name="Dexterity"
      debility="Shaky"
      bind:score={character.stats.dexterity}/>
    <Stat
      name="Constitution"
      debility="Sick"
      bind:score={character.stats.constitution}/>
    <Stat
      name="Intelligence"
      debility="Stunned"
      bind:score={character.stats.intelligence}/>
    <Stat
      name="Wisdom"
      debility="Confused"
      bind:score={character.stats.wisdom}/>
    <Stat
      name="Charisma"
      debility="Scarred"
      bind:score={character.stats.charisma}/>
  </section>

  <section id="tracking">
    <section id="hit-points" class="block">
      <h1>Hit Points</h1>
      <div id="hit-points-max">
        <h2>Max</h2>
        <span>{character.hitPoints.max}</span>
      </div>
      <div id="hit-points-current">
        <h2>Current</h2>
        <span>{character.hitPoints.max - character.hitPoints.damage}</span>
      </div>
    </section>

    <section id="damage-die" class="block">
      <h1>Damage Die</h1>
      <span>{character.playbook.damageDieFaces}</span>
    </section>

    <section id="armor" class="block">
      <h1>Armor</h1>
      <span>{character.armor}</span>
    </section>
  </section>
</main>

<style>
  main >  header {
    @apply p-2;
  }

  main > header > h1 {
    @apply text-4xl rounded-md;
  }

  header, section {
    @apply bg-gray-200;
  }

  #stats, #tracking {
    @apply flex;
  }

  section > h1 {
    /*@apply col-span-2;*/
  }

  .block {
    @apply flex-1 text-center m-2 bg-white grid grid-cols-2 border-solid border-2 border-gray-800 rounded-md;
  }

  #damage-die span:before {
    content: 'D';
  }
</style>