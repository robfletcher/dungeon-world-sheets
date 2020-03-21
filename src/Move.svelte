<script>
  import {getContext, setContext} from "svelte";
  import {character, selectedMove} from "./store";

  export let name;
  export let requiresLevel = 0;
  export let requiresMove = null;
  export let replacesMove = null;

  let mode = getContext("mode");

  setContext("moveName", name);

  let hasMove = $character.moves.some(it => it.name === name);
  let hasRequiredLevel = ($character.level + 1) >= requiresLevel;
  let hasRequiredMove = requiresMove === null || $character.moves.some(it => it.name === requiresMove);
  let hasReplacedMove = replacesMove === null || $character.moves.some(it => it.name === replacesMove);
  let qualifies = !hasMove && hasRequiredLevel && hasRequiredMove && hasReplacedMove;

  let display = (mode === "display" && hasMove) || (mode === "select" && qualifies);

  let checked = false;

  selectedMove.subscribe(move => {
    checked = move === name;
  });

  const select = (event) => {
    if (event.target.checked) {
      selectedMove.set(event.target.value);
    }
  };
</script>

{#if display}
  <div class="move move-{mode}">
    {#if mode === "select"}
      <input type="radio" value={name} on:change={select} checked={checked} class="move-selector">
    {/if}
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
{/if}

<style global>
  .move {
    @apply pb-2 mx-4 my-2;
  }

  .move, .move fieldset, .move p {
    break-inside: avoid;
  }

  .move-select {
    @apply grid col-gap-2 row-gap-0 pb-2 m-2;
    grid-template-columns: 1.5rem auto;
  }

  .move p, .move fieldset, .move ul {
    @apply mb-2;
  }

  .move h2 {
    @apply font-bold text-2xl;
  }

  .move h3 {
    @apply font-bold ml-4;
  }

  .move li {
    @apply list-disc list-inside m-0;
  }

  .move li ul {
    @apply ml-6;
  }

  .move .move-selector {
    justify-self: center;
    align-self: start;
    height: 2.25rem;
  }

  .move fieldset {
    @apply grid grid-cols-1;
  }

  .move fieldset.inline-options {
    @apply block ml-4;
  }

  .move fieldset label {
    @apply inline-block;
  }

  .move fieldset.inline-options label {
    @apply whitespace-no-wrap;
  }

  .move fieldset input[type=checkbox] {
    @apply mr-2;
  }

  .move fieldset.inline-options input[type=checkbox] {
    @apply ml-2 mr-0;
  }

  .move dt {
    @apply float-left font-bold mr-1;
  }
</style>