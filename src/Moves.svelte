<script>
  import {character} from "./store";
  import BarbarianMoves from "./moves/TheBarbarian.svelte";
  import ImmolatorMoves from "./moves/TheImmolator.svelte";
</script>

<section id="moves">
  <header>
    <h1>Moves</h1>
  </header>

  <BarbarianMoves/>
  <ImmolatorMoves/>
</section>

<style global>
  #moves {
    @apply col-span-5 grid grid-cols-3;
  }

  #moves header {
    @apply col-span-3;
  }

  #moves h2 {
    @apply font-bold text-lg;
  }

  #moves li {
    @apply list-disc list-inside m-0;
  }

  #moves article {
    @apply pb-2;
  }

  #moves article:not(:last-child) {
    @apply border-b;
  }
</style>