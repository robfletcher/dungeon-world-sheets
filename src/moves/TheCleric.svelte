<script>
  import {character} from "../store";
  import Move from "../Move.svelte";
  import MoveOption from "../MoveOption.svelte";
</script>

<Move name="Deity">
  <p>
    You serve and worship some deity or power which grants you spells. Give your god a name and choose your deity’s
    domain:
  </p>
  <fieldset>
    <MoveOption value="Healing and Restoration"/>
    <MoveOption value="Bloody Conquest"/>
    <MoveOption value="Civilization"/>
    <MoveOption value="Knowledge and Hidden Things"/>
    <MoveOption value="The Downtrodden and Forgotten"/>
    <MoveOption value="What Lies Beneath"/>
  </fieldset>
  <p>Choose one precept of your religion:</p>
  <fieldset>
    <MoveOption value="It preaches the sanctity of suffering, add Petition: Suffering"/>
    <MoveOption value="It’s clutish and insular, add Petition: Gaining Secrets"/>
    <MoveOption value="It Observes important sacrificial rites, add Petition: Offering"/>
    <MoveOption value="It believes in trial by combat, add Petition: Personal Victory"/>
  </fieldset>
</Move>