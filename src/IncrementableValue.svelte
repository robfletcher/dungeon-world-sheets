<script>
  export let id;
  export let value;
  export let max = null;
  export let readonly = false;
</script>

<section id={id} class="labelled-score">
  <h1>
    <slot></slot>
  </h1>
  <div class="value" class:with-max={max != null}>
    {#if max == null}
      {value}
    {:else}
      <span class="current">{value}</span>/<span class="max">{max}</span>
    {/if}
  </div>
  {#if !readonly}
    <div class="increment-decrement">
      <button type="button" on:click={() => value++} disabled={max != null && value >= max}>+</button>
      <button type="button" on:click={() => value--} disabled={value < 1}>-</button>
    </div>
  {/if}
</section>

<style>
  :global(.labelled-score) {
    @apply flex items-center mx-2;
  }

  :global(.labelled-score h1) {
    @apply mr-2 bg-gray-800 text-white text-lg leading-none text-right;
  }

  :global(.labelled-score .value) {
    @apply flex items-center justify-center h-16 w-16 text-3xl bg-white text-black border-solid border-2 border-gray-800 rounded-full;
  }

  .labelled-score .increment-decrement {
    @apply flex flex-col;
  }

  .labelled-score .with-max {
    @apply whitespace-no-wrap text-2xl;
  }

  .value .current {
    @apply -mt-4;
  }

  .value .max {
    @apply -mb-2;
  }
</style>