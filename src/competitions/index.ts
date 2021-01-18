import { parseISO, areIntervalsOverlapping } from "date-fns"
import type { Competition } from "../types/competition";

export function getCompetionsIn(interval: Interval): Competition[] {
  return competitions.filter(comp => areIntervalsOverlapping(interval, comp, { inclusive: true }));
}

const competitions: Competition[] = [
  {
    name: "Voorjaarscompetitie 2021 (van 2019)",
    start: parseISO("2021-02-01"),
    end: parseISO("2021-05-01"),
  }, {
    name: "Najaarscompetitie 2021 (van 2019)",
    start: parseISO("2021-09-01"),
    end: parseISO("2021-12-01"),
  },
  {
    name: "Voorjaarscompetitie 2022 (van 2019)",
    start: parseISO("2022-02-01"),
    end: parseISO("2022-05-01"),
  },
]
