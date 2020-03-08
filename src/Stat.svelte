<script>
  export let name;
  export let debility;
  export let score;
  let bonus;
  let isDebilitated = false;

  $: bonus = (score === 3 ? -3 : score <= 5 ? -2 : score <= 8 ? -1 : score <= 12 ? 0 : score <= 15 ? 1 : score <= 17 ? 2 : 3) - (isDebilitated ? 1 : 0);
</script>

<section>
  <h1>{name}</h1>
  <div class="score">{score}</div>
  <div class="bonus" class:bonus-positive={bonus >= 0}>{bonus}</div>
  <label class="debility">
    <input type="checkbox" bind:checked={isDebilitated}>
    <span>{debility}</span>
  </label>
</section>

<style>
  section {
    @apply flex-1 text-center px-4 py-2 m-2 bg-white grid grid-cols-2 border-solid border-2 border-gray-600 rounded-md;
  }

  h1 {
    @apply col-span-2;
  }

  .bonus {
    @apply row-span-2 border-double border-8 border-gray-600 rounded;
  }

  .bonus-positive:before {
    content: '+';
  }

  .debility input[type=checkbox] {
    @apply mr-2 leading-tight;
  }

  .debility span {
    @apply text-sm;
  }
</style>
