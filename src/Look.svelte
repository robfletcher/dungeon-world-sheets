<script>
  export let character;
  let editing = false;
  let custom = {};
  character.playbook.looks
    .map(look => look.category)
    .forEach(category => custom[category] = "");

  function selectLook(e) {
    character.playbook.looks
      .map(look => look.category)
      .forEach(category => {
        character.look[category] = e.target.form[category].value
      });
    editing = false;
  }
</script>

<section id="look" class:editing={editing}>
  <form>
    <h1>Look</h1>
    <button type="button" class="edit" on:click={e => editing = true}>Edit</button>
    <button type="button" class="save" on:click={selectLook}>Save</button>
    <ul>
        {#each character.playbook.looks as { category, suggestions }}
          <li>
            <h2>{category}</h2>
              {#each suggestions as suggestion}
                <label class:current={character.look[category] === suggestion}>
                  <input type="radio"
                         name={category}
                         value={suggestion}>
                    {suggestion}
                </label>
              {/each}
            <label class:current={suggestions.indexOf(character.look[category]) === -1}>
              <input type="radio"
                     name={category}
                     bind:value={custom[category]}>
              <input type="text"
                     placeholder="write your own"
                     bind:value={custom[category]}>
              <span class="custom">{character.look[category] || ''}</span>
            </label>
          </li>
        {/each}
    </ul>
  </form>
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

  h2 {
    @apply inline-block font-bold;
  }

  h2, label {
    @apply align-middle;
  }

  h2:after {
    content: ':';
  }

  label {
    @apply hidden mr-2;
  }

  .current {
    @apply inline-block;
  }

  input {
    @apply hidden;
  }

  .editing input {
    @apply inline-block;
  }

  .editing .custom {
    @apply hidden;
  }

  .editing label {
    @apply inline-block cursor-pointer;
  }
</style>