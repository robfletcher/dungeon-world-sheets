<script>
  import {name, playbook, level, xp, strength, dexterity, constitution, intelligence, wisdom, charisma, hitPointsMax, damage, armor} from "./character";

  import Stat from "./Stat.svelte";
  import Look from "./Look.svelte";
  import Drives from "./Drives.svelte";
  import Gear from "./Gear.svelte";
</script>

<main class="container">
  <header>
    <h1>{$name} {$playbook.name}</h1>

    <section id="level">
      <h1>Level</h1>
      <div class="value">{$level}</div>
    </section>

    <section id="xp">
      <h1>Experience</h1>
      <div class="value">{$xp}</div>
    </section>
  </header>

  <section>
    <section id="stats">
      <Stat
        name="Strength"
        debility="Weak"
        bind:score={$strength}/>
      <Stat
        name="Dexterity"
        debility="Shaky"
        bind:score={$dexterity}/>
      <Stat
        name="Constitution"
        debility="Sick"
        bind:score={$constitution}/>
      <Stat
        name="Intelligence"
        debility="Stunned"
        bind:score={$intelligence}/>
      <Stat
        name="Wisdom"
        debility="Confused"
        bind:score={$wisdom}/>
      <Stat
        name="Charisma"
        debility="Scarred"
        bind:score={$charisma}/>
    </section>

    <section id="tracking">
      <section id="hit-points">
        <h1>Hit Points</h1>
        <div class="value">{$hitPointsMax - $damage}</div>
      </section>

      <section id="damage-die">
        <h1>Damage Die</h1>
        <div class="value d{$playbook.damageDieFaces}">{$playbook.damageDieFaces}</div>
      </section>

      <section id="armor">
        <h1>Armor</h1>
        <div class="value">{$armor}</div>
      </section>
    </section>
  </section>

  <Look/>
  <Drives/>
  <Gear/>
</main>

<style>
  main {
    @apply grid grid-cols-2;
  }

  section {
    @apply bg-gray-200;
  }

  header {
    @apply col-span-2 flex bg-gray-800 p-2 pr-12 mb-2 items-center;
  }

  header > h1 {
    @apply flex-grow text-4xl rounded-md mx-4 leading-none;
  }

  header section {
    @apply bg-transparent flex-initial my-1 ml-4;
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

  #hit-points .value, #damage-die .value, #armor .value, #level .value, #xp .value {
    @apply flex items-center justify-center h-16 w-16 -mr-8 text-3xl bg-white border-solid border-2 border-gray-800 rounded-full;
    position: absolute;
    right: 0;
    top: -0.75rem;
    z-index: 1;
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