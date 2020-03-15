<script>
  import {character} from "../store";
</script>

{#if $character.playbook.name === "The Barbarian"}
  <article>Barbarian move 1</article>
  <article>Barbarian move 2</article>
{/if}