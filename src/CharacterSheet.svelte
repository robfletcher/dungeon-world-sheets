<script>
  import Stat from "./Stat.svelte";

  export let character;
</script>

<main class="container">
  <header>
    <h1>{character.name} {character.playbook.name}</h1>

    <section id="level">
      <h1>Level</h1>
      <div class="value">{character.level}</div>
    </section>

    <section id="xp">
      <h1>Experience</h1>
      <div class="value">{character.xp}</div>
    </section>
  </header>

  <section class="left">
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
        <div class="value">{character.hitPoints.max - character.hitPoints.damage}</div>
      </section>

      <section id="damage-die">
        <h1>Damage Die</h1>
        <div class="value d{character.playbook.damageDieFaces}">{character.playbook.damageDieFaces}</div>
      </section>

      <section id="armor">
        <h1>Armor</h1>
        <div class="value">{character.armor}</div>
      </section>
    </section>
  </section>
</main>

<style>
  section {
    @apply bg-gray-200;
  }

  header {
    @apply flex bg-gray-800 p-2 pr-12 mb-2;
  }

  header > h1 {
    @apply flex-grow text-4xl rounded-md mx-4;
  }

  header section {
    @apply bg-transparent flex-initial my-1 ml-4;
  }

  .left {
    width: 50%;
  }

  #stats {
    @apply grid grid-cols-3 p-2
  }

  #tracking {
    @apply flex flex-wrap p-2;
  }

  #hit-points, #damage-die, #armor {
    @apply m-2;
  }

  #hit-points h1, #damage-die h1, #armor h1, #level h1, #xp h1,
  #hit-points .value, #damage-die .value, #armor .value, #level .value, #xp .value {
    @apply p-2;
    display: inline-block;
    vertical-align: middle;
  }

  #hit-points h1, #damage-die h1, #armor h1, #level h1, #xp h1 {
    height: 2.5rem;
    line-height: 1.5;
    padding-left: 3rem;
    padding-right: 2rem;
  }

  #hit-points .value, #damage-die .value, #armor .value, #level .value, #xp .value {
    @apply text-3xl text-center bg-white border-solid border-2 border-gray-800 rounded-full;
    height: 4rem;
    width: 4rem;
    line-height: 1.5;
    margin-left: -2rem;
    margin-right: -2rem;
    position: relative;
  }

  .value {
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