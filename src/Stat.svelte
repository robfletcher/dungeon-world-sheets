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
    <span>{debility}</span>
    <input type="checkbox" bind:checked={isDebilitated}>
  </label>
</section>

<style>
  section {
    @apply flex-1 text-center m-2 bg-white grid grid-cols-2 border-solid border-2 border-gray-800 rounded-md;
  }

  h1 {
    @apply col-span-2;
  }

  .score {
    @apply m-2 text-lg;
  }

  .bonus {
    @apply row-span-2 border-double border-8 border-gray-800 rounded-full m-2 shadow-inner text-3xl;
    line-height: 1.9;
    width: 2.5em;
    height: 2.5em;
    font-family: 'Charm', serif;
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
