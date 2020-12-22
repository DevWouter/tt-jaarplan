<script lang="ts">
	import { data } from "./data";
	import DateDisplay from "./DateDisplay.svelte";
	import MonthView from "./MonthView.svelte";
</script>

<style>
</style>

<main>
	<MonthView />
	<p>
		Het jaar start op
		<DateDisplay date={data.start} />
		en eindigt op
		<DateDisplay date={data.end} />
	</p>

	<p>Competitie periodes:</p>
	<ul>
		{#each data.competitions as competition}
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
		{#each data.vacationPeriods as vacationPeriod}
			<li>
				Van
				<DateDisplay
					date={vacationPeriod.start}
					format="EEEE dd-MM-yyyy" />
				tot en met
				<DateDisplay
					date={vacationPeriod.end}
					format="EEEE dd-MM-yyyy" />:
				{vacationPeriod.name}
			</li>
		{/each}
	</ul>

	<p>Er wordt getrained op de volgende datums:</p>
	<ul>
		{#each data.trainingDays as trainingDay}
			<li>
				Op
				<DateDisplay date={trainingDay.date} format="dd MMM yyyy" />:
				{trainingDay.target}
				({trainingDay.periodType ?? []})
			</li>
		{/each}
	</ul>
</main>
