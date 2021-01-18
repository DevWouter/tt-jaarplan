<script>
  import DateDisplay from "./DateDisplay.svelte";

  export var title = "";
  export var plan;
  export var themeCounters;
  export var periodCounters;
</script>

<!-- Show overview of all themes and when they are being used -->

<table border="1" cellpadding="2">
  <thead>
    <tr>
      <th class="title">{title}</th>
      {#each plan.trainingPeriods as period}
        <th>
          <DateDisplay date={period.start} format="MM-yyyy" />
        </th>
      {/each}
      <th>Totaal</th>
    </tr>
  </thead>
  <tbody>
    {#each themeCounters as theme}
      <tr>
        <th>{theme.name}</th>
        {#each theme.counts as count}
          <td>{count == 0 ? "" : "✔"}</td>
        {/each}
        <td>{theme.total}</td>
      </tr>
    {/each}
  </tbody>
  <tfoot>
    <tr>
      <th>Totaal</th>
      {#each periodCounters as count}
        <td>
          {count}
        </td>
      {/each}
      <td>{periodCounters.reduce((pv, cv) => pv + cv)}</td>
    </tr>
  </tfoot>
</table>

<style>
  table {
    border-collapse: collapse;
  }
  th {
    text-align: left;
  }
  tbody th{
    width: 30ch;
    font-weight: normal;
  }
  td {
    text-align: center;
  }
  td:last-of-type {
    font-weight: bold;
  }
  tbody tr:nth-of-type(2n) {
    background-color: lightgray;
  }
  tfoot td,
  tfoot th {
    border-top-width: 2px;
  }

  thead th{
    background-color: black;
    color: white;
  }
  tfoot td {
    font-weight: bold;
  }
</style>
