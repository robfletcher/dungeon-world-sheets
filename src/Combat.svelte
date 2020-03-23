<script>
  import {character} from "./store";
  import IncrementableValue from "./IncrementableValue.svelte";

  let hitPoints = 0;

  function damage() {
    character.update(c => {
      c.damage += hitPoints;
      if (c.damage > c.hitPointsMax) {
        c.damage = c.hitPointsMax;
      }
      hitPoints = 0;
      return c;
    });
  }

  function heal() {
    character.update(c => {
      c.damage -= hitPoints;
      if (c.damage < 0) {
        c.damage = 0;
      }
      hitPoints = 0;
      return c;
    });
  }
</script>

<section id="combat">
  <header>
    <IncrementableValue
      id="hit-points"
      bind:value={$character.hitPointsCurrent}
      max={$character.hitPointsMax}>Hit Points</IncrementableValue>

    <section id="damage-die" class="labelled-score">
      <h1>Damage Die</h1>
      <div
        class="value d{$character.playbook.damageDieFaces}">{$character.playbook.damageDieFaces}</div>
    </section>

    <IncrementableValue id="armor" bind:value={$character.armor}>Armor</IncrementableValue>
  </header>

  <fieldset>
    <button type="button" on:click={damage}>Damage</button>
    <input type="number" min="0" bind:value={hitPoints}>
    <button type="button" on:click={heal}>Heal</button>
  </fieldset>
</section>

<style>
  #combat {
    @apply col-span-2;
  }

  #damage-die .value {
    color: transparent;
    background-image: url('/dice.png');
    background-size: cover;
    background-position-x: -63px;
    background-position-y: 0px;
  }

  #damage-die .d4 {
    background-position-x: 5px;
    background-position-y: -3px;
  }

  #damage-die .d8 {
    background-position-x: 124px;
    background-position-y: 0px;
  }

  #damage-die .d10 {
    background-position-x: 60px;
    background-position-y: 0px;
  }

  #damage-die .value::before {
    content: 'D';
  }

  fieldset {
    @apply flex justify-center mt-6;
  }

  fieldset button, fieldset input {
    @apply text-xl;
  }

  fieldset input {
    @apply mx-2 w-16;
  }
</style>