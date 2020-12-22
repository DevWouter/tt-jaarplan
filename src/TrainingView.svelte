<script lang="ts">
  import type { globals } from "svelte/internal";
  import type { TrainingDay } from "./training-day";

  export var training: TrainingDay;
</script>

<style>
  .row {
    margin-bottom: 3px;
    display: flex;
  }

  .label {
    padding-right: 8px;
    font-weight: bold;
  }
</style>

<div class="row">
  <div class="label">Club:</div>
  <div class="value">{training.club}</div>
</div>
<div class="row">
  <div class="label">Groep:</div>
  <div class="value">{training.groups.join(', ')}</div>
</div>
<div class="row">
  <div class="label">Doel:</div>
  <div class="value">
    {training.goals.join(', ')}
    {#if training.goals.length == 0}(Geen direct doel){/if}
  </div>
</div>
{#if training.periods.length}
  <div class="row">
    <div class="label">Periodes:</div>
    <div class="value">{training.periods.join(', ')}</div>
  </div>
{/if}
