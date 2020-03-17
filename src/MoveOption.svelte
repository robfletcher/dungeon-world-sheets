<script>
  import {getContext} from "svelte";
  import {character} from "./store";

  export let value;
  const name = getContext("moveName");

  $: move = $character.moves.find(it => it.name === name);
  $: checked = move == null ? false : (move.options || []).includes(value);

  function updateOptions(event) {
    character.update(c => {
      const move = c.moves.find(it => it.name === name);
      if (move != null) {
        const index = (move.options || []).indexOf(value);
        if (event.target.checked) {
          if (index < 0) {
            if (move.options === undefined) {
              move.options = [value];
            } else {
              move.options.push(value);
            }
          }
        } else {
          if (index >= 0) {
            move.options.splice(index, 1);
          }
        }
      }
      return c;
    });
  }
</script>

<label><input type="checkbox" on:change={updateOptions} checked={checked} value={value}> {value}</label>
