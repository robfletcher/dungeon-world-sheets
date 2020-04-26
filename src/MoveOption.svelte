<script>
  export let character;
  export let move;
  export let value;
  export let label;

  $: checked = move == null ? false : (move.options || []).includes(value);

  function updateOptions(event) {
    character.update(c => {
      const index = (move.options || []).indexOf(value);
      console.log('updating', move.name, 'with', value, event.target.checked, index, move.options);
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
      let i = c.moves.findIndex(it => it.name === move.name);
      c.moves[i] = move;
      return c;
    });
  }
</script>

<label>
  <input type="checkbox" on:change={updateOptions} checked={checked} value={value}>
  {@html label}
</label>

<style>
</style>