<script>
  import {character} from "./store";

  export let name;
  export let requiresLevel = 0;

  let isDisabled =
    $character.playbook.startingMoves.includes(name) || $character.level < requiresLevel;
</script>

<div class="move">
  <input type="checkbox" bind:group={$character.moves} value={name} disabled={isDisabled} class="move-selector">
  <article>
    <h2>{name}</h2>
    <slot></slot>
  </article>
</div>
