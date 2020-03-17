<script>
  import {getContext} from "svelte";
  import {character} from "./store";

  export let type = "checkbox";
  export let id;

  const name = getContext("moveName");

  $: move = $character.moves.find(it => it.name === name);
  $: value = move == null ? false : (move[id] || "");

  function updateOptions(event) {
    character.update(c => {
      if (move != null) {
        move[id] = event.target.value;
      }
      return c;
    });
  }
</script>

<label>
  <slot></slot>
  <input type="text" on:change={updateOptions} value={value} disabled={move == null}>
</label>
