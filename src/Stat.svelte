<script>
  export let name;
  export let debility;
  export let score;
  let bonus;
  let isDebilitated = false;

  $: bonus = (score === 3 ? -3 : score <= 5 ? -2 : score <= 8 ? -1 : score <= 12 ? 0 : score <= 15 ? 1 : score <= 17 ? 2 : 3) - (isDebilitated ? 1 : 0);
</script>

<section class="stat">
  <h1>{name}</h1>
  <div class="score">{score}</div>
  <div class="bonus" class:bonus-positive={bonus >= 0}>{bonus}</div>
  <label class="debility">
    <span>{debility}</span>
    <input type="checkbox" bind:checked={isDebilitated}>
  </label>
</section>

<style>
  .stat {
    @apply relative ml-2 mr-6 my-2 bg-white border-solid border-2 border-gray-800 rounded-md;
  }

  .stat h1 {
    @apply flex items-center px-2;
  }

  .score, .debility {
    @apply inline-block align-top mx-2
  }

  .score {
    @apply text-lg;
  }

  .bonus {
    @apply absolute flex items-center justify-center bg-white border-double border-8 border-gray-800 rounded-full text-3xl;
    right: -0.75em;
    top: -0.25em;
    width: 2.5em;
    height: 2.5em;
  }

  .bonus-positive:before {
    content: '+';
  }

  .debility input[type=checkbox] {
    @apply mr-2 leading-tight align-middle;
  }

  .debility span {
    @apply text-sm align-middle;
  }
</style>
