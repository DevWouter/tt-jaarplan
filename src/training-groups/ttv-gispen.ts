import { clubGispen } from "../clubs";
import { TargetGroup } from "../types/target-group";
import { TargetGroupMotivation } from "../types/target-group-motivation";
import type { TrainingGroup } from "../types/training-group";

export const groupGispenTeens: TrainingGroup = {
  club: clubGispen,
  targetGroups: [TargetGroup.Teens, TargetGroup.Youth],
  motivations: [TargetGroupMotivation.Fun, TargetGroupMotivation.Win]
};