import { clubTTC } from "../clubs";
import { TargetGroup } from "../types/target-group";
import { TargetGroupMotivation } from "../types/target-group-motivation";
import type { TrainingGroup } from "../types/training-group";

export const groupTtcTeensMixed: TrainingGroup = {
  club: clubTTC,
  targetGroups: [TargetGroup.Teens, TargetGroup.Youth],
  motivations: [TargetGroupMotivation.Fun, TargetGroupMotivation.Win]
};

export const groupTtcTeensCompetition: TrainingGroup = {
  club: clubTTC,
  targetGroups: [TargetGroup.Teens],
  motivations: [TargetGroupMotivation.Win]
};
