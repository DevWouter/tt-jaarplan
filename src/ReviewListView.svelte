<script lang="ts">
  import DateDisplay from "./DateDisplay.svelte";
  import type { TrainingPeriod } from "./types/training-period";
  import type { TrainingPlan } from "./types/training-plan";
  import { getReviewsIn } from "./year";

  export var planOrPeriod: TrainingPlan | TrainingPeriod;

  $: reviews = getReviewsIn(planOrPeriod);
</script>

<ul>
  {#each reviews as review}
    <li>
      Review op/na
      <DateDisplay date={review.date} format="dd-MM-yyyy" />
      &mdash;
      {review.test.name} ({review.reviewType})
    </li>
  {/each}
</ul>
