<script>
  export let character;
</script>

<section id="hit-points">
  <h1>Hit Points</h1>
  <dl>
    <dt>Max</dt>
    <dd>{character.hitPoints.max}</dd>
    <dt>Current</dt>
    <dd>{character.hitPoints.current}</dd>
  </dl>
</section>
