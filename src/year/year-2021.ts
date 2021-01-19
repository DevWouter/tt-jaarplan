import type { TrainingPlan } from "../types/training-plan";

import { getVacationsIn } from "../vacations";
import { getCompetionsIn } from "../competitions";

import { groupGispenTeens, groupTtcTeensCompetition, groupTtcTeensMixed } from "../training-groups";

import { parseISO, eachDayOfInterval, startOfWeek, add, endOfWeek, isWednesday, isTuesday, isFriday, } from "date-fns";
import * as SkillTests from "../skill-tests";
import { MentalityThemes, PhysicalThemes, SkillThemes, TacticalThemes } from "../themes";
import { ReviewType } from "../types/review";


const newYearsDay = parseISO("2021-01-01");
const newYearsEve = parseISO("2021-12-31");

export const year2021: TrainingPlan = {
  title: "2021",
  start: startOfWeek(newYearsDay, { weekStartsOn: 2 }),
  end: endOfWeek(newYearsEve, { weekStartsOn: 2 }),
  competitions: getCompetionsIn({ start: newYearsDay, end: newYearsEve }),
  vacationPeriods: getVacationsIn({ start: newYearsDay, end: newYearsEve }),
  trainings: [],
  trainingPeriods: [],
};

// Maak training dagen aan.
eachDayOfInterval(year2021).forEach(day => {
  if (isTuesday(day)) {
    year2021.trainings.push({
      start: add(day, { hours: 18, minutes: 30 }),
      end: add(day, { hours: 19, minutes: 45 }),
      location: "Tielse TC",
      groups: [groupTtcTeensMixed],
    });
  }

  if (isFriday(day)) {
    year2021.trainings.push({
      start: add(day, { hours: 18, minutes: 30 }),
      end: add(day, { hours: 19, minutes: 45 }),
      location: "Tielse TC",
      groups: [groupTtcTeensCompetition],
    });
  }

  // TTV Gispen
  if (isWednesday(day)) {
    year2021.trainings.push({
      start: add(day, { hours: 18, minutes: 45 }),
      end: add(day, { hours: 20, minutes: 0 }),
      location: "TTV Gispen",
      groups: [groupGispenTeens]
    });
  }
});

year2021.trainingPeriods.push({
  key: year2021.trainingPeriods.length + 1,
  start: parseISO("2021-01-01"), end: parseISO("2021-02-01"),
  title: "Herstart training na Corona lockdown",
  notes: "We herstart na een lange periode van de corona. Periode kan verschoven worden.",
  themes: {
    physical: [PhysicalThemes.endurance],
    skill: [SkillThemes.service_placement],
    tactical: [TacticalThemes.placement_service],
    mental: [MentalityThemes.training_mentality],
  },
  reviews: [
    { test: SkillTests.Service_TargetElimination_1m, after: { weeks: 1 }, reviewType: ReviewType.Baseline, },
    { test: SkillTests.Service_TargetElimination_1m, after: { weeks: 3 }, reviewType: ReviewType.Improvement, },
  ],
});

year2021.trainingPeriods.push({
  key: year2021.trainingPeriods.length + 1,
  start: parseISO("2021-02-01"), end: parseISO("2021-03-01"),
  title: "Rally (opening)",
  themes: {
    physical: [PhysicalThemes.movementEconomy],
    skill: [SkillThemes.FH_TS],
    tactical: [TacticalThemes.placement_side],
    mental: [MentalityThemes.improve_task_orientated_thinking],
  },
  reviews: [
    { test: SkillTests.FH_TS__longest_rally_in_3m_simple, after: { weeks: 1 }, reviewType: ReviewType.Baseline },
    { test: SkillTests.FH_TS__longest_rally_in_3m_simple, after: { weeks: 3 }, reviewType: ReviewType.Improvement },
    { test: SkillTests.FH_TS__longest_rally_in_3m_simple, after: { weeks: 6 }, reviewType: ReviewType.Improvement },

    { test: SkillTests.FH_TS__near_the_edge_with_cards, after: { weeks: 2 }, reviewType: ReviewType.Baseline },
    { test: SkillTests.FH_TS__near_the_edge_with_cards, after: { weeks: 4 }, reviewType: ReviewType.Improvement },
  ]
});

year2021.trainingPeriods.push({
  key: year2021.trainingPeriods.length + 1,
  start: parseISO("2021-03-01"), end: parseISO("2021-04-01"),
  title: "Rally (blokken)",
  themes: {
    physical: [PhysicalThemes.control],
    skill: [SkillThemes.FH_block, SkillThemes.BH_TS, SkillThemes.FH_TS,],
    tactical: [TacticalThemes.opening_rally],
    mental: [MentalityThemes.handling_failure],
  },
  reviews: [
  ]
});

year2021.trainingPeriods.push({
  key: year2021.trainingPeriods.length + 1,
  start: parseISO("2021-04-01"), end: parseISO("2021-05-01"),
  title: "Initatief tijdens rally overnemen/afpakken",
  themes: {
    physical: [PhysicalThemes.explosivePower],
    skill: [SkillThemes.FH_TS, SkillThemes.BH_TS],
    tactical: [TacticalThemes.placement_opponent],
    mental: [MentalityThemes.courage],
  },
  reviews: []
});

year2021.trainingPeriods.push({
  key: year2021.trainingPeriods.length + 1,
  start: parseISO("2021-05-01"), end: parseISO("2021-06-01"),
  title: "Einde voorjaarscompetitie vieren",
  themes: {
    physical: [PhysicalThemes.balance],
    skill: [SkillThemes.service_placement, SkillThemes.FH_flip, SkillThemes.BH_flip],
    tactical: [TacticalThemes.variation_service],
    mental: [MentalityThemes.fun],
  },
  reviews: []
});

year2021.trainingPeriods.push({
  key: year2021.trainingPeriods.length + 1,
  start: parseISO("2021-06-01"), end: parseISO("2021-07-01"),
  title: "Schuiven en coachen",
  themes: {
    physical: [PhysicalThemes.balance],
    skill: [SkillThemes.BH_push, SkillThemes.FH_push],
    tactical: [TacticalThemes.coaching],
    mental: [MentalityThemes.improving_external_focus],
  },
  reviews: []
});


year2021.trainingPeriods.push({
  key: year2021.trainingPeriods.length + 1,
  start: parseISO("2021-07-01"), end: parseISO("2021-08-01"),
  title: "Fijn de vakantie in gaan",
  themes: {
    physical: [PhysicalThemes.explosivePower],
    skill: [SkillThemes.FH_TS, SkillThemes.FH_smash, SkillThemes.FH_sidespin],
    tactical: [TacticalThemes.disrupt_skill],
    mental: [MentalityThemes.handeling_disruption],
  },
  reviews: []
});

year2021.trainingPeriods.push({
  key: year2021.trainingPeriods.length + 1,
  start: parseISO("2021-08-01"), end: parseISO("2021-09-01"),
  title: "Hoe te winnen van betere tegenstanders?",
  themes: {
    physical: [PhysicalThemes.endurance],
    // Ik zit hier sterk te denken aan schuiven, waarna men omloopt en overschake
    skill: [SkillThemes.FH_push, SkillThemes.service_placement],
    tactical: [TacticalThemes.opening_rally, TacticalThemes.disrupt_mentality, TacticalThemes.analyse_service],
    mental: [MentalityThemes.training_mentality],
  },
  reviews: []
});

year2021.trainingPeriods.push({
  key: year2021.trainingPeriods.length + 1,
  start: parseISO("2021-09-01"), end: parseISO("2021-10-01"),
  title: "Schuiven (basis) & competitie begint",
  themes: {
    physical: [PhysicalThemes.control],
    skill: [SkillThemes.BH_push, SkillThemes.FH_push, SkillThemes.FH_smash],
    tactical: [TacticalThemes.coaching, TacticalThemes.placement_opponent],
    mental: [MentalityThemes.patience],
  },
  reviews: []
});

year2021.trainingPeriods.push({
  key: year2021.trainingPeriods.length + 1,
  start: parseISO("2021-10-01"), end: parseISO("2021-11-01"),
  title: "Shuiven overnemen en aanvallen",
  themes: {
    physical: [PhysicalThemes.explosivePower, PhysicalThemes.speed],
    skill: [SkillThemes.BH_push, SkillThemes.BH_chop],
    tactical: [TacticalThemes.opening_rally, TacticalThemes.placement_side],
    mental: [MentalityThemes.courage],
  },
  reviews: []
});


year2021.trainingPeriods.push({
  key: year2021.trainingPeriods.length + 1,
  start: parseISO("2021-11-01"), end: parseISO("2021-12-01"),
  title: "Korte ballen & einde competitie",
  themes: {
    physical: [PhysicalThemes.control, PhysicalThemes.balance],
    skill: [SkillThemes.FH_block, SkillThemes.FH_TS],
    tactical: [TacticalThemes.variation_service, TacticalThemes.placement_distance],
    mental: [MentalityThemes.improve_task_orientated_thinking],
  },
  reviews: []
});

year2021.trainingPeriods.push({
  key: year2021.trainingPeriods.length + 1,
  start: parseISO("2021-12-01"), end: parseISO("2022-01-01"),
  title: "Einde van het jaar",
  themes: {
    physical: [PhysicalThemes.explosivePower, PhysicalThemes.movementEconomy],
    skill: [SkillThemes.FH_smash, SkillThemes.FH_sidespin, SkillThemes.service_effect],
    tactical: [TacticalThemes.coaching],
    mental: [MentalityThemes.fun]
  },
  reviews: []
});