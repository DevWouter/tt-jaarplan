<script lang="ts">
  import DateDisplay from "./DateDisplay.svelte";
  import { setRoute } from "./routing";
  import type { TrainingPeriod } from "./types/training-period";
  import type { TrainingPlan } from "./types/training-plan";
  import { years } from "./year";

  export var plan: TrainingPlan = undefined;
  export var period: TrainingPeriod = undefined;

  var selectedPlan: TrainingPlan = plan;
  var selectedPeriod: TrainingPeriod = period;

  $: {
    setRoute({ plan: selectedPlan, period: selectedPeriod });
  }
</script>

<div class="container">
  <h1 class="title">Jaarplan</h1>
  <div class="plan-selector">
    <select name="year" id="year" bind:value={selectedPlan}>
      {#each years as plan}
        <option value={plan}>{plan.title}</option>
      {/each}
    </select>
  </div>

  <div class="period-selector">
    <select name="view" id="view" bind:value={selectedPeriod}>
      <option value={undefined}>Overzicht</option>
      {#each selectedPlan.trainingPeriods as period}
        <option value={period}>
          <DateDisplay date={period.start} format="yyyy-MM" />
          &mdash;
          {period.title}
        </option>
      {/each}
    </select>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: min-content min-content min-content;
    gap: 8px;
    align-items: center;
  }
</style>
