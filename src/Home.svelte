<script>
  import * as shortid from 'shortid/lib/index';
  import {gameStore} from './store';
  import router from "page";

  let name = "";

  const createGame = () => {
    if (name != null && name.trim() !== "") {
      const game = {_id: shortid.generate(), name: name};
      console.log(game);
      gameStore.set(game);
      router.redirect(`/${game._id}`);
    }
  };
</script>

<main class="container">
  <header>
    <h1>Create a Game</h1>
  </header>
  <fieldset>
    <label>
      Name:
      <input type="text" bind:value={name}>
    </label>
    <button type="button" on:click={createGame}>Create</button>
  </fieldset>
</main>

<style>
</style>