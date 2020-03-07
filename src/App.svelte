<script>
  import Stats from "./Stats.svelte";
  import HitPoints from "./HitPoints.svelte";
  import DamageDie from "./DamageDie.svelte";

  import {playbooks} from "./Playbooks";

  export let character = {
    name: "",
    playbook: playbooks[0],
    level: 1,
    stats: {
      strength: 16,
      dexterity: 15,
      constitution: 13,
      intelligence: 12,
      wisdom: 10,
      charisma: 8
    },
    hitPoints: {
      max: 0,
      current: 0
    }
  };
  $: character.hitPoints.max = character.playbook.baseHitPoints + character.stats.constitution;
</script>

<main class="container">
  <h1>{character.name} {character.playbook.name}</h1>

  <label>Name <input bind:value={character.name}></label>
  <label>Class
    <select bind:value={character.playbook}>
        {#each playbooks as playbook}
          <option value={playbook}>{playbook.name}</option>
        {/each}
    </select>
  </label>

  <Stats bind:character={character}/>
  <HitPoints bind:character={character}/>
  <DamageDie bind:character={character}/>
</main>

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