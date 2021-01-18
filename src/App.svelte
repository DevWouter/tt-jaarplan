<script lang="ts">
  import * as routeData from "./routing";
  import AppHeader from "./AppHeader.svelte";
  import PlanOverview from "./PlanOverview.svelte";
  import PeriodView from "./PeriodView.svelte";

  const routePlan = routeData.routePlan;
  const routePeriod = routeData.routePeriod;
</script>

<main>
  <AppHeader plan={$routePlan} period={$routePeriod} />
  {#if $routePeriod}
    <PeriodView period={$routePeriod} plan={$routePlan} />
  {:else}
    <PlanOverview plan={$routePlan} />
  {/if}
</main>

<style>
</style>
