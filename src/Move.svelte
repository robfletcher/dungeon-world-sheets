<script>
  import {character} from "./store";

  export let name;
</script>

<article>
  <input type="checkbox" bind:group={$character.moves} value={name} disabled={$character.playbook.startingMoves.includes(name)}>
  <h2>{name}</h2>
  <slot></slot>
</article>
