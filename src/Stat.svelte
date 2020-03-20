<script>
  export let name;
  export let debility;
  export let stat;
</script>

<section class="stat">
  <h1>{name}</h1>
  <div class="score">{stat.value}</div>
  <div class="bonus" class:bonus-positive={stat.bonus >= 0}>{stat.bonus}</div>
  <label class="debility">
    <span>{debility}</span>
    <input type="checkbox" bind:checked={stat.isDebilitated}>
  </label>
</section>

<style>
  .stat {
    @apply relative pr-10 bg-white border-solid border-2 border-gray-800 rounded-r-full;
  }

  .stat h1 {
    @apply flex items-center px-2 bg-gray-800 text-white text-xl h-12;
  }

  .score, .debility {
    @apply inline-block align-middle mx-2
  }

  .score {
    @apply text-lg;
  }

  .bonus {
    @apply absolute flex items-center justify-center h-20 w-20 bg-white border-double border-8 border-gray-800 rounded-full text-3xl;
    right: -2px;
    top: -2px;
  }

  .debility input[type=checkbox] {
    @apply mr-2 leading-tight align-middle;
  }

  .debility span {
    @apply text-sm align-middle;
  }
</style>
