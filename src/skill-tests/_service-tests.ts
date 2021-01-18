import { MentalityThemes, PhysicalThemes, SkillThemes, TacticalThemes } from "../themes";
import type { SkillTest } from "../types/skill-test";

export const Service_TargetElimination_1m: SkillTest = {
  name: "Binnen 1 minuut zoveel mogelijk bekertjes van tafel serveren",
  how: `Speler probeert binnen 1 minuut zoveel mogelijk bekertjes die op tafel staan te ` +
    `raken van serveren. Elke geraakt doel met een correcte service is een punt.`,
  relatedThemes: {
    skill: [SkillThemes.service_basic],
    physical: [PhysicalThemes.balance, PhysicalThemes.control],
    mental: [MentalityThemes.improve_task_orientated_thinking, MentalityThemes.patience],
    tactical: [TacticalThemes.service_placement]
  }
};