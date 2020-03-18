<script>
  import {character} from "./store";
  import BarbarianMoves from "./moves/TheBarbarian.svelte";
  import BardMoves from "./moves/TheBard.svelte";
  import ClericMoves from "./moves/TheCleric.svelte";
  import DruidMoves from "./moves/TheDruid.svelte";
  import FighterMoves from "./moves/TheFighter.svelte";
  import ImmolatorMoves from "./moves/TheImmolator.svelte";
  import MageMoves from "./moves/TheMage.svelte";
  import PaladinMoves from "./moves/ThePaladin.svelte";
  import PriestMoves from "./moves/ThePriest.svelte";
  import RangerMoves from "./moves/TheRanger.svelte";
  import TemplarMoves from "./moves/TheTemplar.svelte";
  import ThiefMoves from "./moves/TheThief.svelte";
  import WizardMoves from "./moves/TheWizard.svelte";

  // TODO: well, this is garbage
  function classToMoveSet() {
    switch ($character.characterClass) {
      case "The Barbarian":
        return BarbarianMoves;
      case "The Bard":
        return BardMoves;
      case "The Cleric":
        return ClericMoves;
      case "The Druid":
        return DruidMoves;
      case "The Fighter":
        return FighterMoves;
      case "The Immolator":
        return ImmolatorMoves;
      case "The Mage":
        return MageMoves;
      case "The Paladin":
        return PaladinMoves;
      case "The Priest":
        return PriestMoves;
      case "The Ranger":
        return RangerMoves;
      case "The Templar":
        return TemplarMoves;
      case "The Thief":
        return ThiefMoves;
      case "The Wizard":
        return WizardMoves;
      default:
        throw `No moves defined for ${$character.characterClass}`;
    }
  }

  $: moveSet = classToMoveSet();
</script>

<section id="moves">
  <header>
    <h1>Moves</h1>
  </header>

  <svelte:component this={moveSet}/>
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

  .move h3 {
    @apply font-bold ml-4;
  }

  .move li {
    @apply list-disc list-inside m-0;
  }

  .move li ul {
    @apply ml-6;
  }

  .move .move-selector {
    @apply mt-2;
    justify-self: end;
    align-self: start;
  }

  .move fieldset {
    @apply grid grid-cols-1;
  }

  .move fieldset.inline-options {
    @apply block ml-4;
  }

  .move fieldset label {
    @apply inline-block;
  }

  .move fieldset.inline-options label {
    @apply whitespace-no-wrap;
  }

  .move fieldset label > * {
    @apply align-middle;
  }

  .move fieldset input[type=checkbox] {
    @apply mr-2;
  }

  .move fieldset.inline-options input[type=checkbox] {
    @apply ml-2 mr-0;
  }

  .move dt {
    @apply float-left font-bold mr-1;
  }
</style>