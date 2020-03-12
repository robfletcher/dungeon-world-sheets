<script>
  import {look, playbook} from "./character";

  let editing = false;

  function edit(e) {
    editing = true;
  }

  function save(e) {
    editing = false;
  }
</script>

<section id="look" class:editing={editing}>
  <h1>Look</h1>
  <button type="button" class="edit" on:click={edit}>Edit</button>
  <button type="button" class="save" on:click={save}>Save</button>
  <ul>
      {#each $playbook.looks as { category, suggestions }}
        <li>
          <label>
            <span class="category">{category}</span>
            <span class="look">{$look[category] || ''}</span>
            <input type="text"
                   placeholder={suggestions}
                   bind:value={$look[category]}>
          </label>
        </li>
      {/each}
  </ul>
</section>

<style>
  #look {
    @apply py-2 bg-gray-200 relative;
  }

  button {
    @apply absolute text-white;
    right: 0.5rem;
    top: 1rem;
  }

  button.save {
    @apply hidden;
  }

  .editing button.edit {
    @apply hidden;
  }

  .editing button.save {
    @apply block;
  }

  h1 {
    @apply flex items-center h-10 px-2;
  }

  ul {
    @apply m-2;
  }

  li {
    @apply my-2;
  }

  label {
    @apply flex;
  }

  .category {
    @apply flex-initial font-bold;
  }

  .look {
    @apply flex-grow;
  }

  .category:after {
    content: ':';
  }

  input, .look {
    @apply px-1;
  }

  input {
    @apply hidden;
  }

  .editing input {
    @apply flex flex-grow;
  }

  .editing .look {
    @apply hidden;
  }

  .editing label {
    @apply cursor-pointer;
  }
</style>