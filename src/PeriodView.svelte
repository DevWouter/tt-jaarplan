<script lang="ts">
  import { areIntervalsOverlapping } from "date-fns";

  import type { TrainingPeriod } from "./types/training-period";
  import type { TrainingPlan } from "./types/training-plan";

  import DateDisplay from "./DateDisplay.svelte";
  import PeriodViewThemes from "./PeriodViewThemes.svelte";
  import TrainingListView from "./TrainingListView.svelte";
  import ReviewListView from "./ReviewListView.svelte";

  export var period: TrainingPeriod;
  export var plan: TrainingPlan;

  $: trainings = plan.trainings.filter((x) =>
    areIntervalsOverlapping(period, x)
  );
</script>

<h2>{period.title}</h2>
<div class="period-duration">
  van <DateDisplay date={period.start} /> <br /> tot <DateDisplay
    date={period.end}
  />
</div>

<h3>Themas</h3>
<PeriodViewThemes themes={period.themes} />

<h3>Reviews</h3>
<ReviewListView planOrPeriod={period} />

<h3>Trainingen</h3>
<TrainingListView {trainings} />
