import type { Club } from "./club";
import type { TargetGroup } from "./target-group";
import type { TargetGroupMotivation } from "./target-group-motivation";

export interface TrainingGroup {
  club: Club;
  targetGroups: TargetGroup[];
  motivations: TargetGroupMotivation[];
}