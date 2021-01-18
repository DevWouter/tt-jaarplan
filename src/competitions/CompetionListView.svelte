<script>
  import DateDisplay from "../DateDisplay.svelte";

  /**
   * @type import("../types/training-plan").TrainingPlan
   */
  export var plan;
</script>

<ul>
  {#each plan.competitions as competition}
    <li>
      Van
      <DateDisplay date={competition.start} format="dd-MM-yyyy" />
      tot
      <DateDisplay date={competition.end} format="dd-MM-yyyy" />:
      {competition.name}
    </li>
  {/each}
</ul>
