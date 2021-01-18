import { parseISO, areIntervalsOverlapping } from "date-fns";
import type { Interval } from 'date-fns';
import type { Vacation } from "../types/vacation";

export function getVacationsIn(interval: Interval): Vacation[] {
  return vacations.filter(vacation => {
    try {
      return areIntervalsOverlapping(interval, vacation, { inclusive: true });
    } catch (ex) {
      console.error("Problem detected with: ", vacation);
      throw ex;
    }
  });
}

const vacations: Vacation[] = [
  {
    name: "Kerstvakantie 2020",
    start: parseISO("2020-12-19"),
    end: parseISO("2021-01-03")
  },
  {
    name: "Voorjaarsvakantie 2021",
    start: parseISO("2021-02-20"),
    end: parseISO("2021-02-28"),
  },
  {
    name: "Meivakantie 2021",
    start: parseISO("2021-05-01"),
    end: parseISO("2021-05-09"),
  },
  {
    name: "Zomervakantie 2021",
    start: parseISO("2021-07-17"),
    end: parseISO("2021-08-29"),
  },
  {
    name: "Herfstvakantie 2021",
    start: parseISO("2021-10-16"),
    end: parseISO("2021-10-24"),
  },
  {
    name: "Kerstvakantie 2021",
    start: parseISO("2021-12-25"),
    end: parseISO("2022-01-09"),
  }
];

