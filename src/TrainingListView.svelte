<script>
  import DateDisplay from "./DateDisplay.svelte";

  /**
   * @type import('./types/training').Training[]
   */
  export var trainings;
</script>

<ul>
  {#each trainings as training}
    <li>
      van
      <DateDisplay date={training.start} format="dd MMMM HH:mm" />
      t/m
      <DateDisplay date={training.end} format="HH:mm" />
      &mdash;
      {training.groups.map((x) => x.club.name)} (<DateDisplay date={training.start} format="eeeeee" />)
    </li>
  {/each}
</ul>
