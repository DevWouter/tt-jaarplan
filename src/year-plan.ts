import { isBefore, isAfter, differenceInDays, parseISO, eachDayOfInterval, startOfWeek } from "date-fns";

import type { TrainingDay } from "./training-day";

const DAYS_TO_PREPARE_FOR_COMPETITION = 21;

interface Competition {
  name: string;
  start: Date;
  end: Date;
}

interface VacationPeriod {
  name: string;
  start: Date;
  end: Date;
}

interface YearPlan {
  start: Date;
  end: Date;

  trainingDays: TrainingDay[];
  competitions: Competition[];
  vacationPeriods: VacationPeriod[];
  months:
  {
    monthOf: Date;
    remarks: string[];
  }[]
}

export const yearPlan: YearPlan = {
  start: parseISO("2021-01-01"),
  end: parseISO("2022-01-07"),
  trainingDays: [],
  competitions: [],
  vacationPeriods: [],
  months: [],
};

yearPlan.start = startOfWeek(yearPlan.start, { weekStartsOn: 2 });
yearPlan.end = startOfWeek(yearPlan.end, { weekStartsOn: 2 });

yearPlan.competitions.push({
  name: "Voorjaarscompetitie 2021 (van 2019)",
  start: parseISO("2021-02-01"),
  end: parseISO("2021-05-01"),
});

yearPlan.competitions.push({
  name: "Najaarscompetitie 2021 (van 2019)",
  start: parseISO("2021-09-01"),
  end: parseISO("2021-12-01"),
});

yearPlan.competitions.push({
  name: "Voorjaarscompetitie 2022 (van 2019)",
  start: parseISO("2022-02-01"),
  end: parseISO("2022-05-01"),
});

yearPlan.vacationPeriods = [
  {
    name: "Voorjaarsvakantie 2021",
    start: parseISO("2021-02-20"),
    end: parseISO("2021-03-28"),
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

const firstWednesday = startOfWeek(yearPlan.start, { weekStartsOn: 3 });
const firstFriday = startOfWeek(yearPlan.start, { weekStartsOn: 5 });

const tielseTcGeneralDays = eachDayOfInterval(yearPlan, { step: 7 });
const tielseTcSelectionDays = eachDayOfInterval({ start: firstFriday, end: yearPlan.end }, { step: 7 });
const gispenGeneralDays = eachDayOfInterval({ start: firstWednesday, end: yearPlan.end }, { step: 7 });

tielseTcGeneralDays.forEach(date => {
  yearPlan.trainingDays.push({
    date,
    club: "Tielse TC",
    groups: ["Jeugd + selectie"],
    goals: [],
    periods: [],
  });
});

gispenGeneralDays.forEach(date => {
  yearPlan.trainingDays.push({
    date,
    club: "TTV Gispen",
    groups: ["Jeugd + selectie"],
    goals: [],
    periods: [],
  });
});

tielseTcSelectionDays.forEach(date => {
  yearPlan.trainingDays.push({
    date,
    club: "Tielse TC",
    groups: ["Selectie"],
    goals: [],
    periods: [],
  });
});

yearPlan.trainingDays = yearPlan.trainingDays.sort((x, y) => {
  return x.date.valueOf() - y.date.valueOf();
});

yearPlan.trainingDays.forEach(training => {
  const date = training.date;

  // Check if it's preparation period
  var daysToCompetition = yearPlan.competitions
    .filter(x => date < x.start)
    .map(x => differenceInDays(date, x.start))
    .reduce((pv, cv) => pv > cv ? pv : cv, Number.NEGATIVE_INFINITY);

  if (daysToCompetition !== Number.NEGATIVE_INFINITY &&
    Math.abs(daysToCompetition) < DAYS_TO_PREPARE_FOR_COMPETITION) {
    training.goals.push("Voorbereiding competitie");
  }

  // Check if it's in the competition
  var comps = yearPlan.competitions.filter(x => isAfter(date, x.start) && isBefore(date, x.end));
  comps.forEach(comp => {
    training.goals.push(comp.name);
  });

  // Check if it's vacation period
  var activeVactionPeriods = yearPlan.vacationPeriods.filter(x => isAfter(date, x.start) && isBefore(date, x.end))
  activeVactionPeriods.forEach(element => {
    training.periods.push(element.name);
  });
});


yearPlan.months.push({
  monthOf: parseISO("2021-01-01"),
  remarks: [
    `Thema techniek: service en ontvangst`,
    `Thema tactiek: Plaatsing en gevolg (service)`,
    `Thema mentaal: Trainingsinstelling (waarom trainen we)`,
    `Thema fysiek: conditie en kracht`,
    `Zeker omdat dit post-corona is en er een mogelijke competitie aankomt 
     wil ik dat ze voornamelijk punten halen uit de service en de ontvangst.`
  ]
});

yearPlan.months.push({
  monthOf: parseISO("2021-02-01"),
  remarks: [
    `Thema techniek: FH TS Diagonaal en FH TS parallel`,
    `Thema tactiek: Plaatsing en gevolg (rally)`,
    `Thema mentaal: Taak georienteerd werken/denken ("Wat moet ik doen?")`,
    `Thema fysiek: Precisie`,
    `Nu de competitie is begonnen kunnen ze in het begin nog weg komen met 
     een goeie service, maar daarna zullen ze toch echt moeten spelen. Focus
     ligt op aanvallend speelstijl en tegenstanders tot keuze dwingen. Doel 
     is dat spelers proberen om vanaf de service een plan hebben om binnen X 
     slagen een punt te forceren.`]
});

yearPlan.months.push({
  monthOf: parseISO("2021-03-01"),
  remarks: [
    `Thema techniek: Blokken van TS met BH en FH`,
    `Thema tactiek: Kijken naar tegenstander en kans afwachten`,
    `Thema mentaal: Omgaan met tegenslagen`,
    `Thema fysiek: Vastheid/uithoudingsvermogen`,
    `Focus is het reduceren van puntenverlies bij een betere tegenstander. Wacht op je kans en neem over.`
  ]
});

yearPlan.months.push({
  monthOf: parseISO("2021-04-01"),
  remarks: [
    `Thema techniek: FH Counterspin (overnemen van FH TS)`,
    `Thema tactiek: Aanvallen op wissel en spreiden`,
    `Thema mentaal: Lef/Durf`,
    `Thema fysiek: Explosieve kracht ontwikkelen`,
    `Laatste maand van de voorjaarscompetitie`
  ]
});
yearPlan.months.push({
  monthOf: parseISO("2021-05-01"),
  remarks: [
    `Thema techniek: Aanvallen op service (flips)`,
    `Thema tactiek: Meerdere services ontwikkelen, divers zijn`,
    `Thema mentaal: Spelplezier`,
    `Thema fysiek: Balans`,
    `Voorjaarscompetitie is afgerond.`
  ]
});

yearPlan.months.push({
  monthOf: parseISO("2021-06-01"),
  remarks: [
    `Thema techniek: Service verbergen en returns`,
    `Thema tactiek: Service herkennen (biomechanica bij service)`,
    `Thema mentaal: Externe focus, voorkomen van interne focus`,
    `Thema fysiek: Flexibiliteit`,
  ]
});

yearPlan.months.push({
  monthOf: parseISO("2021-07-01"),
  remarks: [
    `Thema techniek: Service effecten en returns`,
    `Thema tactiek: Spin herkennen`,
    `Thema mentaal: Tegenstander ontregelen en vasthouden aan eigen plan`,
    `Thema fysiek: Handelingssnelheid`,
    `Vakantie begint in deze maand`
  ]
});
yearPlan.months.push({
  monthOf: parseISO("2021-08-01"),
  remarks: [
    `Thema techniek: FH TS opening (bol en vlak)`,
    `Thema tactiek: Richting`,
    `Thema mentaal: Trainingsinstelling`,
    `Thema fysiek: Balans`,
    `Laatste maand van de zomervakantie, voorbereiden op competitie.`
  ]
});

yearPlan.months.push({
  monthOf: parseISO("2021-09-01"),
  remarks: [
    `Thema techniek: FH Push`,
    `Thema tactiek: Kort en lang spelen`,
    `Thema mentaal: Wedstrijdmentaliteit`,
    `Thema fysiek: Krachtbeheersing`,
    `Najaars competitie begint`
  ]
});


yearPlan.months.push({
  monthOf: parseISO("2021-10-01"),
  remarks: [
    `Thema techniek: BH TS parallel`,
    `Thema tactiek: Speelstijl omgooien in wedstrijd`,
    `Thema mentaal: Buiten je comfortzone spelen`,
    `Thema fysiek: Uithoudingsvermogen`,
  ]
});
yearPlan.months.push({
  monthOf: parseISO("2021-11-01"),
  remarks: [
    `Thema techniek: Actief blokken (FH+BH)`,
    `Thema tactiek: De aanval van de tegenstander in jouw voordeel zetten`,
    `Thema mentaal: Externe focus`,
    `Thema fysiek: Precisie`,
    `Laatste maand van de competitie.`
  ]
});
yearPlan.months.push({
  monthOf: parseISO("2021-12-01"),
  remarks: [
    `Thema techniek: BH BS, BH+FH Schuiven`,
    `Thema tactiek: Plaatsen van de bal`,
    `Thema mentaal: Geduld`,
    `Thema fysiek: Vastheid`,
  ]
});

