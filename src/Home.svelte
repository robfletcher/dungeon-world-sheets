<script>
  import * as shortid from 'shortid/lib/index';
  import router from "page";
  import {withDatabase} from "./store";

  let name = "";

  const createGame = () => {
    if (name != null && name.trim() !== "") {
      const g = {_id: shortid.generate(), name: name};
      console.log('creating game', g);
      withDatabase((db) => {
        db
          .put(g)
          .then(it => {
            console.log('created game', it);
            router.redirect(`/${g._id}`);
          })
          .catch((error) => {
            console.log('failed to create game', error);
          });
      });
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