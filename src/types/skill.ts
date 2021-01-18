import type { Themes } from "./training-period-themes";

/**
 * A skill of a player.
 */
export interface Skill {
  name: string;
  themes?: Partial<Themes>;
}