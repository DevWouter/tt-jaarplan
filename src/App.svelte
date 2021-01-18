<script lang="ts">
  import * as routeData from "./routing";
  import AppHeader from "./AppHeader.svelte";
  import PlanOverview from "./PlanOverview.svelte";
  import PeriodView from "./PeriodView.svelte";

  const routePlan = routeData.routePlan;
  const routePeriod = routeData.routePeriod;
</script>

<div class="header"><AppHeader plan={$routePlan} period={$routePeriod} /></div>
<main>
  {#if $routePeriod}
    <PeriodView period={$routePeriod} plan={$routePlan} />
  {:else}
    <PlanOverview plan={$routePlan} />
  {/if}
</main>

<style>
  .header {
    background: white;
    position: sticky;
    top: 0;
  }
</style>
