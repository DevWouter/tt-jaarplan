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

  var physicalThemeCounters: ThemeCounter[] = getThemeCounter<ThemePhysical>(
    Object.entries(PhysicalThemes),
    (x: TrainingPeriod) => x.themes.physical
  );

  var physicalPeriodCounters = plan.trainingPeriods.map(
    (x) => x.themes?.physical.length ?? 0
  );

  var skillThemeCounters: ThemeCounter[] = getThemeCounter<ThemeSkill>(
    Object.entries(SkillThemes),
    (x: TrainingPeriod) => x.themes.skill
  );

  var skillPeriodCounters = plan.trainingPeriods.map(
    (x) => x.themes?.skill.length ?? 0
  );

  var tacticalThemeCounters: ThemeCounter[] = getThemeCounter<ThemeTactical>(
    Object.entries(TacticalThemes),
    (x: TrainingPeriod) => x.themes.tactical
  );

  var tacticalPeriodCounters = plan.trainingPeriods.map(
    (x) => x.themes?.tactical.length ?? 0
  );

  var mentalityThemeCounters: ThemeCounter[] = getThemeCounter<ThemeMentality>(
    Object.entries(MentalityThemes),
    (x: TrainingPeriod) => x.themes.mental
  );

  var mentalityPeriodCounters = plan.trainingPeriods.map(
    (x) => x.themes?.mental.length ?? 0
  );
</script>

<!-- Show overview of all themes and when they are being used -->

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
