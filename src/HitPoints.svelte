<script>
  export let character;
</script>

<section id="hp">
  <h3>Hit Points</h3>
  <dl>
    <dt>Max</dt>
    <dd>{character.hitPoints.max}</dd>
    <dt>Current</dt>
    <dd>{character.hitPoints.current}</dd>
  </dl>
</section>
