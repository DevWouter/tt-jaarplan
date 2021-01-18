import type { Competition } from "./competition";
import type { Training } from "./training";
import type { TrainingPeriod } from "./training-period";
import type { Vacation } from "./vacation";

export interface TrainingPlan {
  title: string;
  start: Date;
  end: Date;

  trainings: Training[];
  competitions: Competition[];
  vacationPeriods: Vacation[];
  trainingPeriods: TrainingPeriod[];
}
