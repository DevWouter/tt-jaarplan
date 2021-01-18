
import { MentalityThemes, PhysicalThemes, SkillThemes, TacticalThemes } from "../themes";
import type { SkillTest } from "../types/skill-test";

export const Returns_Robot_20_balls_simple: SkillTest = {
  name: "20 ballen door robot geserveerd terug plaatsen (simpel)",
  how: `De robot serveert 20 ballen (dus eerst op eigen tafel) waarbij de speler` +
    ` hem terug probeert te spelen. Elke bal die correct terug gespeeld wordt is een punt`,
  relatedThemes: {
    skill: [SkillThemes.return_basic],
    physical: [PhysicalThemes.control],
    mental: [MentalityThemes.handling_failure],
    tactical: [ /* none */]
  }
};