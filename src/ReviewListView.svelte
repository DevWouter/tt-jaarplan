<script lang="ts">
  import DateDisplay from "./DateDisplay.svelte";

  import type { TrainingPlan } from "./types/training-plan";
  import { getReviewsIn } from "./year";

  export var plan: TrainingPlan;

  $: reviews = getReviewsIn(plan);
</script>

<ul>
  {#each reviews as review}
    <li>
      Op/na
      <DateDisplay date={review.date} format="dd-MM-yyyy" />
      &mdash;
      {review.test.name} ({review.reviewType})
    </li>
  {/each}
</ul>
