<script>
  import {character} from "./store";

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

  function healOne() {
    character.update(c => {
      if (c.damage > 0) c.damage--;
      return c;
    });
  }

  function woundOne() {
    character.update(c => {
      if (c.damage < c.hitPointsMax) c.damage++;
      return c;
    });
  }

  function incrementArmor() {
    character.update(c => {
      c.armor++;
      return c;
    });
  }

  function decrementArmor() {
    character.update(c => {
      if (c.armor > 0) c.armor--;
      return c;
    });
  }
</script>

<section id="combat">
  <header>
    <section id="hit-points" class="labelled-score">
      <h1>Hit Points</h1>
      <div class="value">
        <span class="current">{$character.hitPointsCurrent}</span>/<span class="max">{$character.hitPointsMax}</span>
      </div>
      <div class="increment-decrement">
        <button type="button" on:click={healOne}>+</button>
        <button type="button" on:click={woundOne}>-</button>
      </div>
    </section>

    <section id="damage-die" class="labelled-score">
      <h1>Damage Die</h1>
      <div
        class="value d{$character.playbook.damageDieFaces}">{$character.playbook.damageDieFaces}</div>
    </section>

    <section id="armor" class="labelled-score">
      <h1>Armor</h1>
      <div class="value">{$character.armor}</div>
      <div class="increment-decrement">
        <button type="button" on:click={incrementArmor}>+</button>
        <button type="button" on:click={decrementArmor}>-</button>
      </div>
    </section>
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

  #hit-points .value {
    @apply whitespace-no-wrap text-2xl;
  }

  #hit-points .current {
    @apply -mt-4;
  }

  #hit-points .max {
    @apply -mb-2;
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

  #damage-die .value:before {
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