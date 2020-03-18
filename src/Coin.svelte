<script>
  import Modal from './Modal.svelte';

  import {character} from "./store";

  function decrementCoin() {
    character.update(c => {
      if (c.coin > 0) c.coin--;
      return c;
    })
  }
</script>

<section id="coin" class="labelled-score">
  <h1>Coin</h1>
  <div class="value" on:click={() => alert($character.coin)}>{$character.coin}</div>
  <div class="increment-decrement">
    <button type="button" on:click={() => $character.coin++}>+</button>
    <button type="button" on:click={decrementCoin}>-</button>
  </div>
</section>

<style>

</style>

