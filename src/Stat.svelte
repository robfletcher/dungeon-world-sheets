<script>
  export let name;
  export let debility;
  export let score;
  let bonus;
  let isDebilitated = false;

  $: bonus = (score === 3 ? -3 : score <= 5 ? -2 : score <= 8 ? -1 : score <= 12 ? 0 : score <= 15 ? 1 : score <= 17 ? 2 : 3) - (isDebilitated ? 1 : 0);
</script>

<style>
  .bonus-positive:before {
    content: '+';
  }
</style>

<section>
  <label>{name} <input type="number" min="3" max="18" bind:value={score}></label>
  <label>{debility} <input type="checkbox" bind:checked={isDebilitated}></label>
  <div class:bonus-positive={bonus >= 0}>{bonus}</div>
</section>
