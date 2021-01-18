import type { TrainingGroup } from "./training-group";

export interface Training {
  start: Date;
  end: Date;
  location: string;
  groups: TrainingGroup[];
}