<script lang="ts">
  import DateDisplay from "./DateDisplay.svelte";
  import DayView from "./DayView.svelte";
  import {
    startOfWeek,
    parseISO,
    lastDayOfMonth,
    lastDayOfWeek,
    eachDayOfInterval,
    isSameMonth,
  } from "date-fns";

  import { yearPlan } from "./year-plan";
  import { isEqual } from "date-fns";

  export var month = parseISO("2021-04-01");
  var firstDay = startOfWeek(month, { weekStartsOn: 1 });
  var lastDay = lastDayOfWeek(lastDayOfMonth(month), { weekStartsOn: 1 });

  var days = eachDayOfInterval({ start: firstDay, end: lastDay });

  var monthRemarks = yearPlan.months.find((x) => isSameMonth(x.monthOf, month));

  var weeks: Date[][] = [];
  for (var i = 0; i < days.length; ++i) {
    const weekIndex = Math.floor(i / 7);
    if (weeks[weekIndex] === undefined) {
      weeks[weekIndex] = [];
    }

    if (i % 7 < 5) {
      weeks[weekIndex].push(days[i]);
    }
  }

  function isTrainingDay(day: Date) {
    return yearPlan.trainingDays.some((x) => isEqual(x.date, day));
  }
</script>

<style>
  .container {
    table-layout: fixed;
    width: 100%;
  }
  .week.week--header {
    text-align: center;
    color: white;
    background-color: var(--nttb-blue);
    font-weight: bold;
    font-size: large;
  }

  .day {
    vertical-align: top;
    min-height: 60px;
    color: silver;
  }
  .day.training {
    color: unset;
  }

  .week.week--header .day {
    min-height: unset;
    color: unset;
  }

  .otherMonth {
    color: silver;
  }
  .header {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    background-color: var(--nttb-orange);
    color: white;
    text-transform: capitalize;
  }
  table,
  th,
  td {
    border: 1px solid black;
  }
</style>

<hr />
<h2 class="header">
  <DateDisplay date={month} format="MMMM yyyy" />
</h2>
<table class="container">
  <thead>
    <tr class="week week--header">
      <th class="day">Ma</th>
      <th class="day">Di</th>
      <th class="day">Wo</th>
      <th class="day">Do</th>
      <th class="day">Vr</th>
      <!-- <th class="day">Za</th> -->
      <!-- <th class="day">Zo</th> -->
    </tr>
  </thead>
  {#each weeks as week}
    <tr class="week">
      {#each week as date}
        <td
          class="day"
          class:otherMonth={!isSameMonth(month, date)}
          class:training={isTrainingDay(date)}>
          {#if isSameMonth(month, date)}
            <DayView {date} />
          {:else}&nbsp;{/if}
        </td>
      {/each}
    </tr>
  {/each}
</table>

{#if monthRemarks}
  <h3>
    Opmerkingen voor
    <DateDisplay date={month} format="MMMM yyyy" />
  </h3>
  {#each monthRemarks.remarks as remark}
    <div>{remark}</div>
  {/each}
{/if}
