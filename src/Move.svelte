<script>
  import {onDestroy, onMount} from 'svelte';
  import MoveOption from './MoveOption.svelte';
  import MoveTextInput from './MoveTextInput.svelte';
  import {character} from "./store";

  export let name;

  const move = $character.playbook.moves.find(it => it.name === name);

  let element;
  let options = [];

  onMount(() => {
    element.querySelectorAll('.move-options li').forEach(it => {
      let label = it.innerHTML;
      let value = it.getAttribute('data-value') || it.innerText;
      it.classList.add('move-option-interactive');
      it.innerHTML = '';
      if (it.classList.contains('move-option-custom-value')) {
        const option = new MoveTextInput({
          target: it,
          props: {
            move: $character.moves.find(it => it.name === name),
            id: it.getAttribute('data-option-id'),
            label: label
          }
        });
        options.push(option);
      } else {
        const option = new MoveOption({
          target: it,
          props: {
            move: $character.moves.find(it => it.name === name),
            value: value,
            label: label
          }
        });
        options.push(option);
      }
    });
  });

  onDestroy(() => {
    while (options.length > 0) {
      options.pop().$destroy();
    }
  })
</script>

<div class="move" bind:this={element}>
  <article>
    <h2>{move.name}</h2>
    {#if move.requiresMove !== undefined}
      <p><em>Requires: {move.requiresMove}</em></p>
    {/if}
    {#if move.replacesMove !== undefined}
      <p><em>Replaces: {move.replacesMove}</em></p>
    {/if}
    {@html move.description}
  </article>
</div>

<style>
  .move {
    @apply pb-2 mx-4 my-2;
  }

  .move, .move :global(ul), .move :global(p) {
    break-inside: avoid;
  }

  .move :global(.move-options label) {
    @apply inline-block;
  }

  .move :global(.move-options-inline label) {
    @apply whitespace-no-wrap;
  }

  .move :global(.move-options input[type=checkbox]) {
    @apply mr-2;
  }

  .move :global(.move-options-inline input[type=checkbox]) {
    @apply ml-2 mr-0;
  }
</style>