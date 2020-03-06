<script>
    export let name;
    export let debility;
    export let score = 3;
    let bonus;
    let isDebilitated = false;

    $: bonus = (score == 3 ? -3 : score <= 5 ? -2 : score <= 8 ? -1 : score <= 12 ? 0 : score <= 15 ? 1 : score <= 17 ? 2 : 3) - (isDebilitated ? 1 : 0);
</script>

<section>
    <h3>{name}</h3>
    <input type="number" min="3" max="18" bind:value={score}>
    <label>{debility} <input type="checkbox" bind:checked={isDebilitated}></label>
    <div>{bonus}</div>
</section>
