<script lang="ts">
    import DateDisplay from "./DateDisplay.svelte";
    import {
        startOfWeek,
        parseISO,
        lastDayOfMonth,
        lastDayOfWeek,
        eachDayOfInterval,
        isSameMonth,
    } from "date-fns";

    import { data } from "./data";

    var month = parseISO("2021-04-01");
    var firstDay = startOfWeek(month, { weekStartsOn: 1 });
    var lastDay = lastDayOfWeek(lastDayOfMonth(month), { weekStartsOn: 1 });

    var days = eachDayOfInterval({ start: firstDay, end: lastDay });

    var weeks: Date[][] = [];
    for (var i = 0; i < days.length; ++i) {
        const weekIndex = Math.floor(i / 7);
        if (weeks[weekIndex] === undefined) {
            weeks[weekIndex] = [];
        }

        weeks[weekIndex].push(days[i]);
    }
</script>

<style>
    td,
    th {
        border: 1px solid black;
    }

    .otherMonth {
        color: silver;
    }
</style>

<table>
    <thead>
        <tr>
            <th colspan="7">
                <DateDisplay date={month} format="MMMM yyyy" />
            </th>
        </tr>
        <tr>
            <th>Ma</th>
            <th>Di</th>
            <th>Wo</th>
            <th>Do</th>
            <th>Vr</th>
            <th>Za</th>
            <th>Zo</th>
        </tr>
    </thead>
    {#each weeks as week}
        <tr>
            {#each week as date}
                <td class:otherMonth={!isSameMonth(month, date)}>
                    <div class="datum">
                        <DateDisplay {date} format="d" />
                    </div>
                </td>
            {/each}
        </tr>
    {/each}
</table>
