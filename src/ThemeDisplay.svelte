<script lang="ts">
  import type {
    ThemePhysical,
    ThemeSkill,
    ThemeTactical,
    ThemeMentality,
  } from "./types/theme";

  export var theme: ThemePhysical | ThemeSkill | ThemeTactical | ThemeMentality;
</script>

<div class="container">
  {theme.name}
</div>

<style>
  .container{
    display: inline-block;
    padding: 1px 2px;
    border-radius: 2px;
    color: white;
    margin: 1px 1px;
    background-color: var(--nttb-orange);
  }
</style>