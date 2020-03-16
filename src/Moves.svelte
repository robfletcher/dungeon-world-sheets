<script>
  import {character} from "./store";
  import BarbarianMoves from "./moves/TheBarbarian.svelte";
  import BardMoves from "./moves/TheBard.svelte";
  import ImmolatorMoves from "./moves/TheImmolator.svelte";
</script>

<section id="moves">
  <header>
    <h1>Moves</h1>
  </header>

  <BarbarianMoves/>
  <BardMoves/>
  <ImmolatorMoves/>
</section>

<style global>
  #moves {
    @apply col-span-5 grid grid-cols-3 gap-0;
  }

  #moves header {
    @apply col-span-3;
  }

  #moves hr {
    @apply col-span-3 border-gray-400 mx-4 mb-4;
  }

  .move {
    @apply grid col-gap-2 row-gap-0 pb-2 m-2;
    grid-template-columns: 1.5rem auto;
  }

  .move p, .move fieldset, .move ul {
    @apply mb-2;
  }

  .move h2 {
    @apply font-bold text-lg;
  }

  .move li {
    @apply list-disc list-inside m-0;
  }

  .move .move-selector {
    @apply mt-2;
    justify-self: end;
    align-self: start;
  }

  .move fieldset {
    @apply grid grid-cols-1;
  }

  .move fieldset label {
    @apply flex items-center;
  }

  .move fieldset input[type=checkbox] {
    @apply mr-2;
  }
</style>