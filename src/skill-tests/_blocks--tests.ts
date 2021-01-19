import { MentalityThemes, PhysicalThemes, SkillThemes, TacticalThemes } from "../themes";
import type { SkillTest } from "../types/skill-test";

export const Blocking_FH_TS_with_FH_longest_rally: SkillTest = {
  name: "Zoveel mogelijk ballen met FH blokken die met FHTS gespeeld worden",
  how: `1 speler begint met de service en moeten binnen 3 ballen openen met een ` +
    `aggresieve topspin. De ander moet deze blokken. De score wordt bepaald door het hoogste ` +
    `aantal succesvolle blocks in 1 rally.` +
    `Mocht de trainer geen TS zien dan wordt de rally ongeldig verklaard. `,
  relatedThemes: {
    skill: [SkillThemes.FH_TS, SkillThemes.FH_block],
    physical: [PhysicalThemes.control, PhysicalThemes.explosivePower,],
    mental: [MentalityThemes.improving_external_focus],
    tactical: [TacticalThemes.opening_rally]
  }
};

export const Blocking_FH_TS_with_BH_longest_rally: SkillTest = {
  name: "Zoveel mogelijk ballen met BH blokken die met FHTS gespeeld worden",
  how: `1 speler begint met de service en moeten binnen 3 ballen openen met een ` +
    `aggresieve topspin. De ander moet deze blokken. ` +
    `De score wordt bepaald door het hoogste aantal succesvolle blocks in 1 rally.` +
    `Mocht de trainer geen TS zien dan wordt de rally ongeldig verklaard. `,
  relatedThemes: {
    skill: [SkillThemes.BH_TS, SkillThemes.BH_block],
    physical: [PhysicalThemes.control, PhysicalThemes.explosivePower],
    mental: [MentalityThemes.improving_external_focus],
    tactical: [TacticalThemes.opening_rally]
  }
};