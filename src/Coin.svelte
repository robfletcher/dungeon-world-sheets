<script>
  import Modal from './Modal.svelte';

  import {character} from "./store";
</script>

<section id="coin" class="labelled-score">
  <h1>Coin</h1>
  <div class="value" on:click={() => alert($character.coin)}>{$character.coin}</div>
</section>

<style>

</style>

