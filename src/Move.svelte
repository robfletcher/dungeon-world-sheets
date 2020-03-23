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