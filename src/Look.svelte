<script>
  export let character;
  let editing = false;
</script>

<section id="look" class:editing={editing}>
  <h1>Look</h1>
  <button class="edit" on:click={e => editing = true}>Edit</button>
  <button class="save" on:click={e => editing = false}>Save</button>
  <ul>
      {#each character.playbook.looks as { category, suggestions }}
        <li>
          <h2>{category}</h2>
            {#each suggestions as suggestion}
              <label on:click={e => character.look[category] = suggestion}
                     class:current={character.look[category] === suggestion}>{suggestion}</label>
            {/each}
          <label class:current={suggestions.indexOf(character.look[category]) === -1}>
            <input type="text"
                   on:change={e => character.look[category] = e.target.value}
                   placeholder="write your own">
            <span class="custom">{character.look[category] || ''}</span>
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
    @apply hidden;
  }

  .current {
    @apply inline-block;
  }

  input[type=text] {
    @apply hidden;
  }

  .editing input[type=text] {
    @apply inline-block;
  }

  .editing .custom {
    @apply hidden;
  }

  .editing label {
    @apply inline-block cursor-pointer;
  }

  .editing .current {
    @apply underline;
  }

  .editing label:not(:last-child):after {
    content: ',\00a0';
  }
</style>