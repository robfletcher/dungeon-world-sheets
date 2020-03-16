<script>
  import {character} from "./store";

  export let name;
  export let requiresLevel = 0;
  export let requiresMove = null;

  $: hasMove = $character.moves.includes(name);
  let isStarting = $character.playbook.startingMoves.includes(name);
  $: hasRequiredLevel = $character.level >= requiresLevel;
  $: hasRequiredMove = requiresMove === null || $character.moves.includes(requiresMove);
  $: isDisabled = isStarting || !hasRequiredLevel || !hasRequiredMove;
</script>

{#if hasMove}
<div class="move" class:move-selected={hasMove}>
  <input type="checkbox" bind:group={$character.moves} value={name} disabled={isDisabled} class="move-selector">
  <article>
    <h2>{name}</h2>
    {#if requiresMove != null}
      <p><em>Requires: {requiresMove}</em></p>
    {/if}
    <slot></slot>
  </article>
</div>
{/if}