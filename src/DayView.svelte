<script lang="ts">
  import DateDisplay from "./DateDisplay.svelte";
  import TrainingView from "./TrainingView.svelte";

  import { yearPlan } from "./year-plan";
  import { isEqual } from "date-fns";
  export let date: Date;

  const trainings = yearPlan.trainingDays.filter((x) => isEqual(x.date, date));
</script>

<style>
  .datum {
    font-weight: bold;
    text-align: center;
  }
</style>

<div class="datum">
  <b><DateDisplay {date} format="d MMM" /></b>
</div>
{#each trainings as training}
  <TrainingView {training} />
{/each}
