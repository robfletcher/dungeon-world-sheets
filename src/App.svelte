<script>
  import Tailwindcss from './Tailwindcss.svelte';

  import {playbooks} from "./Playbooks";
  import CharacterSheet from "./CharacterSheet.svelte";

  export let character = {
    name: "",
    playbook: playbooks[0],
    level: 1,
    xp: 0,
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
      damage: 0
    },
    armor: 0
  };
  $: character.hitPoints.max = character.playbook.baseHitPoints + character.stats.constitution;
</script>

<Tailwindcss/>

<section>
  <label>Name <input bind:value={character.name}></label>
  <label>Class
    <select bind:value={character.playbook}>
        {#each playbooks as playbook}
          <option
            value={playbook}>{playbook.name} {#if playbook.source !== undefined}
            ({playbook.source}){/if}</option>
        {/each}
    </select>
  </label>
</section>

<CharacterSheet bind:character={character}/>

<style global>
  * {
    font-family: 'Charm', sans-serif;
  }

  h1 {
    @apply bg-gray-800 text-white text-lg;
    height: 2em;
    font-family: 'Uncial Antiqua', sans-serif;
  }

  header h1 {
    line-height: 2;
  }
</style>