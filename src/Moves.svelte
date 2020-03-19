<script>
  import {createEventDispatcher, setContext} from "svelte";
  import {character, selectedMove} from "./store";
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

  export let mode = "display";
  export let selected = null;

  setContext("mode", mode);

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

  const dispatch = createEventDispatcher();
  selectedMove.subscribe(move => {
    dispatch("select-move", move);
  });
</script>

<svelte:component this={moveSet}/>
