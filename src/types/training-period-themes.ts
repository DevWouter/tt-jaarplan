import type { ThemePhysical, ThemeSkill, ThemeTactical, ThemeMentality } from "./theme";

export interface Themes {
  physical: ThemePhysical[];
  skill: ThemeSkill[];
  tactical: ThemeTactical[];
  mental: ThemeMentality[];
}