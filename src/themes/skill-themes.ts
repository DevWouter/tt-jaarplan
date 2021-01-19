import type { ThemeSkill } from "../types/theme";

export const service_placement: ThemeSkill = {
  name: "Service - plaatsing"
};

export const service_speed: ThemeSkill = {
  name: "Service - snelheid",
};

export const service_effect: ThemeSkill = {
  name: "Service - effect",
};

export const service_trajectory: ThemeSkill = {
  name: "Service - traject",
};

type Stroke = "contra" | "topspin" | "backspin" | "sidespin" | "push" | "loop" | "smash" | "flip" | "block" | "chop" | "lob";

var translations: Record<Stroke, string> = {
  contra: "contra",
  topspin: "topspin",
  backspin: "backspin",
  sidespin: "zijspin",
  push: "schuiven",
  block: "blokken",
  chop: "kappen",
  flip: "flip",
  lob: "lob",
  loop: "bolle spin",
  smash: "smash"
};

function createStrokes(kind: Stroke, sides: ("BH" | "FH")[]): ThemeSkill[] {
  return sides.map(side => {
    return { name: `${side} - ${translations[kind]}` };
  });
}

const [FH_contra, BH_contra] = [...createStrokes("contra", ["FH", "BH"])];
const [FH_TS, BH_TS] = [...createStrokes("topspin", ["FH", "BH"])];
const [FH_BS, BH_BS] = [...createStrokes("backspin", ["FH", "BH"])];
const [FH_sidespin, BH_sidespin] = [...createStrokes("sidespin", ["FH", "BH"])];
const [FH_push, BH_push] = [...createStrokes("push", ["FH", "BH"])];
const [FH_block, BH_block] = [...createStrokes("block", ["FH", "BH"])];
const [FH_chop, BH_chop] = [...createStrokes("chop", ["FH", "BH"])];
const [FH_flip, BH_flip] = [...createStrokes("flip", ["FH", "BH"])];
const [FH_loop, BH_loop] = [...createStrokes("loop", ["FH", "BH"])];
const [FH_lob, BH_lob] = [...createStrokes("lob", ["FH", "BH"])];
const [FH_smash, BH_smash] = [...createStrokes("smash", ["FH", "BH"])];

export {
  FH_contra,
  FH_TS,
  FH_BS,
  FH_sidespin,
  FH_push,
  FH_block,
  FH_chop,
  FH_flip,
  FH_loop,
  FH_lob,
  FH_smash,

  BH_contra,
  BH_TS,
  BH_BS,
  BH_sidespin,
  BH_push,
  BH_block,
  BH_chop,
  BH_flip,
  BH_loop,
  BH_lob,
  BH_smash,
};