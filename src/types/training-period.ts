import type { ReviewSetup } from "./review";
import type { Themes } from "./training-period-themes";

export interface TrainingPeriod {
  key: number;
  title: string;
  start: Date;
  end: Date;
  themes: Themes;
  notes?: string;
  reviews?: ReviewSetup[];
}
