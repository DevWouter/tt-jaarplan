import type { Duration } from "date-fns";
import type { SkillTest } from "./skill-test";

export enum ReviewType {
  /**
   * Basic test
   */
  Basic = "Basic",

  /**
   * Capture a performance baseline of the player.
   */
  Baseline = "Baseline",

  /**
   * Perform the test with as goal to measure the improvements 
   * so that we can compare it to the base line.
   */
  Improvement = "Improvement",

  /**
   * Test to validate if players have regressed
   */
  Regression = "Regression"
};

export interface ReviewSetup {
  test: SkillTest;
  reviewType: ReviewType;
  after: Duration;
}


