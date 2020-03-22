<script>
  import {character} from "./store";

  export let move;
  export let id;
  export let label;

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
  {@html label}
  <input type="text" on:change={updateOptions} value={value}>
</label>
