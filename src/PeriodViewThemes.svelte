<script lang="ts">
  import ThemeDisplay from "./ThemeDisplay.svelte";
  import type { Themes } from "./types/training-period-themes";

  export var themes: Themes;
</script>

<div class="theme">
  <div class="theme-name">Fysiek:</div>
  <div class="themes">
    {#each themes.physical as theme}
      <ThemeDisplay {theme} />
    {/each}
  </div>
</div>

<div class="theme">
  <div class="theme-name">Vaardigheid:</div>
  <div class="themes">
    {#each themes.skill as theme}
      <ThemeDisplay {theme} />
    {/each}
  </div>
</div>

<div class="theme">
  <div class="theme-name">Tactiek:</div>
  <div class="themes">
    {#each themes.tactical as theme}
      <ThemeDisplay {theme} />
    {/each}
  </div>
</div>

<div class="theme">
  <div class="theme-name">Mentaal:</div>
  <div class="themes">
    {#each themes.mental as theme}
      <ThemeDisplay {theme} />
    {/each}
  </div>
</div>

<style>
  .theme {
    display: grid;
    grid-template-columns: 12ch 1fr;
  }
</style>
