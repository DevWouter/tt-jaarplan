import { MentalityThemes, PhysicalThemes, SkillThemes, TacticalThemes } from "../themes";
import type { SkillTest } from "../types/skill-test";

export const FH_TS__longest_rally_in_3m_simple: SkillTest = {
  name: "Zoveel mogelijk ballen met forehand TS spelen (in 3 minuten tijd)",
  how: `1 speler moet zoveel mogelijk ballen met FH TS spelen in 3 minuten tijd. De score is het aantal goed geslagen ballen.`,
  relatedThemes: {
    skill: [SkillThemes.FH_TS],
    physical: [PhysicalThemes.control, PhysicalThemes.balance, PhysicalThemes.movementEconomy],
    mental: [MentalityThemes.training_mentality],
    tactical: [ /* none */]
  }
};

export const FH_TS__near_the_edge_with_cards: SkillTest = {
  name: "Forehand TS langs de rand (dwang opbouw)",
  how: `Bij elke speler wordt er een kaart in het midden van hun tafel gelegd. De ander moet altijd tussen de kaart en de FH kant van de tafel spelen. ` +
    `Beide spelers mogen zelf bepalen of ze een kaarten toevoegen of verwijderen bij de andere kant. ` +
    `Na 5 minuten krijgen ze 3 kansen om de hoogste score te halen. ` +
    `Score is het aantal kaarten vermedigvuldg met de hoogste rally.`,
  relatedThemes: {
    skill: [SkillThemes.FH_TS],
    physical: [PhysicalThemes.control],
    mental: [MentalityThemes.courage, MentalityThemes.improve_task_orientated_thinking],
    tactical: [TacticalThemes.placement_side]
  }
};