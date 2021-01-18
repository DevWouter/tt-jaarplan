<script>
  import DateDisplay from "../DateDisplay.svelte";

  /**
   * @type import("../types/training-plan").TrainingPlan
   */
  export var plan;
</script>

<ul>
  {#each plan.vacationPeriods as period}
    <li>
      Van
      <DateDisplay date={period.start} format="EEEE dd-MM-yyyy" />
      tot en met
      <DateDisplay date={period.end} format="EEEE dd-MM-yyyy" />:
      {period.name}
    </li>
  {/each}
</ul>
