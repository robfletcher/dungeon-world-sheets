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

  <section>
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

  <section id="drives">
    <h1>Drives</h1>
    <ul>
      {#each character.playbook.drives as drive}
        <li>
          <h2>{drive.name}</h2>
          <p>{drive.description}</p>
        </li>
      {/each}
    </ul>
  </section>
</main>

<style>
  main {
    @apply grid grid-cols-2;
  }

  section {
    @apply bg-gray-200;
  }

  header {
    @apply col-span-2 flex bg-gray-800 p-2 pr-12 mb-2;
  }

  header > h1 {
    @apply flex-grow text-4xl rounded-md mx-4;
  }

  header section {
    @apply bg-transparent flex-initial my-1 ml-4;
  }

  h2 {
    @apply font-bold mt-2;
  }

  #stats {
    @apply grid grid-cols-3 p-2
  }

  #tracking {
    @apply flex flex-wrap p-2;
  }

  #drives {
    @apply p-2;
  }

  #hit-points, #damage-die, #armor {
    @apply m-2;
  }

  #hit-points, #damage-die, #armor, #level, #xp {
    position: relative;
  }

  #hit-points h1, #damage-die h1, #armor h1, #level h1, #xp h1,
  #hit-points .value, #damage-die .value, #armor .value, #level .value, #xp .value {
    @apply my-3 p-2;
    display: inline-block;
    vertical-align: middle;
  }

  #hit-points h1, #damage-die h1, #armor h1, #level h1, #xp h1 {
    @apply flex items-center h-10 px-10;
  }

  #drives h1 {
    @apply flex items-center h-10 px-2;
  }

  #drives ul {
    @apply mx-2;
  }

  #hit-points .value, #damage-die .value, #armor .value, #level .value, #xp .value {
    @apply flex items-center justify-center h-16 w-16 -mr-8 text-3xl bg-white border-solid border-2 border-gray-800 rounded-full;
    position: absolute;
    right: 0;
    top: -0.75rem;
    z-index: 1;
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