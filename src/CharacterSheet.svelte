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
    <section id="hit-points">
      <h1>Hit Points</h1>
      <div class="block">{character.hitPoints.max - character.hitPoints.damage}</div>
    </section>

    <section id="damage-die">
      <h1>Damage Die</h1>
      <div class="block d{character.playbook.damageDieFaces}">{character.playbook.damageDieFaces}</div>
    </section>

    <section id="armor">
      <h1>Armor</h1>
      <div class="block">{character.armor}</div>
    </section>

    <section>
      <h1>Level</h1>
      <div class="block">{character.level}</div>
    </section>

    <section>
      <h1>Experience</h1>
      <div class="block">{character.xp}</div>
    </section>
  </section>
</main>

<style>
  main > header {
    @apply p-2;
  }

  main > header > h1 {
    @apply text-4xl rounded-md;
  }

  header, section {
    @apply bg-gray-200;
  }

  #stats, #tracking {
    @apply flex p-2;
  }

  #tracking section {
    @apply m-2;
  }

  #tracking h1,
  #tracking .block {
    @apply p-2;
    display: inline-block;
    vertical-align: middle;
  }

  #tracking h1 {
    height: 2.5rem;
    line-height: 1.5;
    padding-left: 3rem;
    padding-right: 2rem;
  }

  #tracking .block {
    @apply text-3xl rounded-full;
    height: 4rem;
    width: 4rem;
    line-height: 1.5;
    margin-left: -2rem;
    margin-right: -2rem;
    position: relative;
  }

  .block {
    @apply text-center bg-white border-solid border-2 border-gray-800 rounded-md;
  }

  #damage-die .block {
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

  #damage-die .block:before {
    content: 'D';
  }
</style>