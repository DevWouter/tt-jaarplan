<script lang="ts">
	import { yearPlan } from "./year-plan";
	import DateDisplay from "./DateDisplay.svelte";
	import MonthView from "./MonthView.svelte";

	import { addMonths } from "date-fns";

	var year = 2021;
	var startDate = new Date(year, 0, 1, 0, 0, 0, 0);
	var months: Date[] = [];
	months = [];
	for (var i = 0; i < 12; ++i) {
		months.push(addMonths(startDate, i));
	}
</script>

<style>
</style>

<main>
	<h1>Jaarplan {year}</h1>

	<p>
		Het jaar start op
		<DateDisplay date={yearPlan.start} />
		en eindigt op
		<DateDisplay date={yearPlan.end} />
	</p>

	<p>Competitie periodes:</p>
	<ul>
		{#each yearPlan.competitions as competition}
			<li>
				Van
				<DateDisplay date={competition.start} format="dd-MM-yyyy" />
				tot
				<DateDisplay date={competition.end} format="dd-MM-yyyy" />:
				{competition.name}
			</li>
		{/each}
	</ul>

	<p>Vakantie periodes:</p>
	<ul>
		{#each yearPlan.vacationPeriods as vacationPeriod}
			<li>
				Van
				<DateDisplay date={vacationPeriod.start} format="EEEE dd-MM-yyyy" />
				tot en met
				<DateDisplay date={vacationPeriod.end} format="EEEE dd-MM-yyyy" />:
				{vacationPeriod.name}
			</li>
		{/each}
	</ul>

	<div class="months">
		{#each months as month}
			<div class="month">
				<MonthView {month} />
			</div>
		{/each}
	</div>
</main>
