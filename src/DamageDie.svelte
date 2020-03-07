<script>
  export let character;
</script>

<style>
  #damage-die p:before {
    content: 'D';
  }
</style>

<section id="damage-die">
  <h3>Damage Die</h3>
  <p>{character.playbook.damageDieFaces}</p>
</section>
