<script>
  import Tailwindcss from './Tailwindcss.svelte';

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

<Tailwindcss />

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
  <section id="armor"><h1>Armor</h1></section>
</main>
