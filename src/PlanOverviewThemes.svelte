<script lang="ts">
  import type { TrainingPlan } from "./types/training-plan";
  import {
    MentalityThemes,
    PhysicalThemes,
    SkillThemes,
    TacticalThemes,
  } from "./themes";
  import type { TrainingPeriod } from "./types/training-period";
  import type {
    ThemeMentality,
    ThemePhysical,
    ThemeSkill,
    ThemeTactical,
  } from "./types/theme";
  import PlanOverviewThemesSingle from "./PlanOverviewThemesSingle.svelte";

  export var plan: TrainingPlan;

  var sortByUsage = false;

  interface ThemeCounter {
    key: string;
    name: string;
    counts: number[];
    total: number;
  }

  function getThemeCounter<T extends { name: string }>(
    themes: [string, T][],
    selector: (x: TrainingPeriod) => T[]
  ): ThemeCounter[] {
    return themes.map(([k, v]) => {
      const counter: ThemeCounter = {
        key: k,
        name: v.name,
        counts: plan.trainingPeriods.map(
          (period) => selector(period).filter((x) => x == v).length
        ),
        total: 0,
      };

      counter.total = counter.counts.reduce((pv, cv) => pv + cv);

      return counter;
    });
  }

  var physicalThemeCounters: ThemeCounter[];
  var physicalPeriodCounters: number[];
  var skillThemeCounters: ThemeCounter[];
  var skillPeriodCounters: number[];
  var tacticalThemeCounters: ThemeCounter[];
  var tacticalPeriodCounters: number[];
  var mentalityThemeCounters: ThemeCounter[];
  var mentalityPeriodCounters: number[];
  $: {
    physicalThemeCounters = getThemeCounter<ThemePhysical>(
      Object.entries(PhysicalThemes),
      (x: TrainingPeriod) => x.themes.physical
    );

    physicalPeriodCounters = plan.trainingPeriods.map(
      (x) => x.themes?.physical.length ?? 0
    );

    skillThemeCounters = getThemeCounter<ThemeSkill>(
      Object.entries(SkillThemes),
      (x: TrainingPeriod) => x.themes.skill
    );

    skillPeriodCounters = plan.trainingPeriods.map(
      (x) => x.themes?.skill.length ?? 0
    );

    tacticalThemeCounters = getThemeCounter<ThemeTactical>(
      Object.entries(TacticalThemes),
      (x: TrainingPeriod) => x.themes.tactical
    );

    tacticalPeriodCounters = plan.trainingPeriods.map(
      (x) => x.themes?.tactical.length ?? 0
    );

    mentalityThemeCounters = getThemeCounter<ThemeMentality>(
      Object.entries(MentalityThemes),
      (x: TrainingPeriod) => x.themes.mental
    );

    mentalityPeriodCounters = plan.trainingPeriods.map(
      (x) => x.themes?.mental.length ?? 0
    );

    if (sortByUsage) {
      const sortFunc = (a: { total: number }, b: { total: number }) =>
        b.total - a.total;

      physicalThemeCounters = physicalThemeCounters.sort(sortFunc);
      skillThemeCounters = skillThemeCounters.sort(sortFunc);
      tacticalThemeCounters = tacticalThemeCounters.sort(sortFunc);
      mentalityThemeCounters = mentalityThemeCounters.sort(sortFunc);
    }
  }
</script>

<!-- Show overview of all themes and when they are being used -->
<button on:click={() => (sortByUsage = !sortByUsage)}
  >{sortByUsage ? "Herstel volgorde" : "Sorteer op gebruik"}</button
>

<PlanOverviewThemesSingle
  title="Fysieke thema's"
  {plan}
  themeCounters={physicalThemeCounters}
  periodCounters={physicalPeriodCounters}
/>
<br />

<PlanOverviewThemesSingle
  title="Techniek thema's"
  {plan}
  themeCounters={skillThemeCounters}
  periodCounters={skillPeriodCounters}
/>
<br />

<PlanOverviewThemesSingle
  {plan}
  title="Tactiek thema's"
  themeCounters={tacticalThemeCounters}
  periodCounters={tacticalPeriodCounters}
/>
<br />

<PlanOverviewThemesSingle
  {plan}
  title="Mentale thema's"
  themeCounters={mentalityThemeCounters}
  periodCounters={mentalityPeriodCounters}
/>
