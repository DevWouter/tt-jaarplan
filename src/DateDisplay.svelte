<script lang="ts">
  import { format as f } from "date-fns";
  import { nl as locale } from "date-fns/locale";
  export let date: Date;
  export let format: string = "EEEE d MMMM yyyy";
</script>

{f(date, format, { locale })}
