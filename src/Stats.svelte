<script>
  import Stat from "./Stat.svelte";

  export let character;
</script>

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

<style>
  section {
    @apply flex bg-gray-200;
  }
</style>