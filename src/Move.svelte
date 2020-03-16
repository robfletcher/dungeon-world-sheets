<script>
  import {setContext} from "svelte";
  import {character} from "./store";

  export let name;
  export let requiresLevel = 0;
  export let requiresMove = null;
  export let replacesMove = null;

  $: checked = $character.moves.some(it => it.name === name);

  function updateMoves(event) {
    character.update(c => {
      const index = c.moves.findIndex(it => it.name === name);
      if (event.target.checked) {
        if (index < 0) {
          c.moves.push({name: name});
        }
      } else {
        if (index >= 0) {
          c.moves.splice(index, 1);
        }
      }
      return c;
    });
  }

  setContext("moveName", name);

  $: hasMove = $character.moves.some(it => it.name === name);
  let isStarting = $character.playbook.startingMoves.includes(name);
  $: hasRequiredLevel = $character.level >= requiresLevel;
  $: hasRequiredMove = requiresMove === null || $character.moves.some(it => it.name === requiresMove);
  $: hasReplacedMove = replacesMove === null || $character.moves.some(it => it.name === replacesMove);
  $: isDisabled = isStarting || !hasRequiredLevel || !hasRequiredMove || !hasReplacedMove;
</script>

<!--{#if hasMove}-->
  <div class="move" class:move-selected={hasMove}>
    <input type="checkbox" on:change={updateMoves} checked={checked} value={name} disabled={isDisabled}
           class="move-selector">
    <article>
      <h2>{name}</h2>
      {#if requiresMove != null}
        <p><em>Requires: {requiresMove}</em></p>
      {/if}
      {#if replacesMove != null}
        <p><em>Replaces: {replacesMove}</em></p>
      {/if}
      <slot></slot>
    </article>
  </div>
<!--{/if}-->