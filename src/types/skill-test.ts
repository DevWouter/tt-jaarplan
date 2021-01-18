import type { Skill } from "./skill";
import type { Themes } from "./training-period-themes";

export interface SkillTest {
  /**
   * Name of the test
   */
  name: string;

  /**
   * How do we test the skill?
   */
  how: string;

  /**
   * With what themes is this test related?
   */
  relatedThemes?: Partial<Themes>;
}
