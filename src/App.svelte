<script>
  import Stat from "./Stat.svelte";

  export let name;

  export let character = {
    name: "",
    stats: {
      strength: 16,
      dexterity: 15,
      constitution: 13,
      intelligence: 12,
      wisdom: 10,
      charisma: 8
    }
  }
</script>

<main>
  <h1>{character.name}</h1>
</main>

<label>Name <input bind:value={character.name}></label>
<label>Class <select></select></label>

<section id="stats">
  <Stat name="Strength" debility="Weak" bind:score={character.stats.strength}/>
  <Stat name="Dexterity" debility="Shaky" bind:score={character.stats.dexterity}/>
  <Stat name="Constitution" debility="Sick" bind:score={character.stats.constitution}/>
  <Stat name="Intelligence" debility="Stunned" bind:score={character.stats.intelligence}/>
  <Stat name="Wisdom" debility="Confused" bind:score={character.stats.wisdom}/>
  <Stat name="Charisma" debility="Scarred" bind:score={character.stats.charisma}/>
</section>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>