<script lang="ts">
  import type { TrainingPlan } from "./types/training-plan";
  import VacationListView from "./vacations/VactionListView.svelte";
  import CompetionListView from "./competitions/CompetionListView.svelte";
  import PlanOverviewThemes from "./PlanOverviewThemes.svelte";
  import ReviewListView from "./ReviewListView.svelte";

  export var plan: TrainingPlan;

  function to(name: string) {
    document.getElementById(name).scrollIntoView();
  }
</script>

<h3 id="h_overview">Overzicht</h3>
<ol>
  <li>
    <a href={location.hash} on:click|preventDefault={() => to("h_competions")}
      >Competitie periodes</a
    >
  </li>
  <li>
    <a href={location.hash} on:click|preventDefault={() => to("h_vacations")}
      >Vakantie periodes</a
    >
  </li>
  <li>
    <a href={location.hash} on:click|preventDefault={() => to("h_themes")}
      >Theme Matrix</a
    >
  </li>
  <li>
    <a href={location.hash} on:click|preventDefault={() => to("h_reviews")}
      >Reviews in deze periode</a
    >
  </li>
</ol>

<h3 id="h_competions">Competitie periodes</h3>
<CompetionListView {plan} />

<h3 id="h_vacations">Vakantie periodes</h3>
<VacationListView {plan} />

<h3 id="h_themes">Thema Matrix</h3>
<PlanOverviewThemes {plan} />

<h3 id="h_reviews">Reviews in deze periode</h3>
<ReviewListView planOrPeriod={plan} />
