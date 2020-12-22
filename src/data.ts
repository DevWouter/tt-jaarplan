import { isBefore, isAfter, differenceInDays, parseISO, eachDayOfInterval, startOfWeek } from "date-fns";

const DAYS_TO_PREPARE_FOR_COMPETITION = 21;

interface TrainingDay {
    date: Date;
    target: ("jeugd" | "selectie")[];
    periodType: ("voorbereiding" | "competitie" | "transitie" | "vakantie" | number)[];
}

interface Competition {
    name: string;
    start: Date;
    end: Date;
}

interface VacationPeriod {
    name: string;
    start: Date;
    end: Date;
    pausePeriod?: {
        start: Date;
        end: Date;
    };
}

interface YearPlan {
    start: Date;
    end: Date;

    trainingDays: TrainingDay[];
    competitions: Competition[];
    vacationPeriods: VacationPeriod[];
}

export const data: YearPlan = {
    start: parseISO("2021-03-01"),
    end: parseISO("2022-03-01"),
    trainingDays: [],
    competitions: [],
    vacationPeriods: [],
};

data.competitions.push({
    name: "Voorjaarscompetitie 2021 (van 2019)",
    start: parseISO("2021-02-01"),
    end: parseISO("2021-05-01"),
});

data.competitions.push({
    name: "Najaarscompetitie 2021 (van 2019)",
    start: parseISO("2021-09-01"),
    end: parseISO("2021-12-01"),
});

data.competitions.push({
    name: "Voorjaarscompetitie 2022 (van 2019)",
    start: parseISO("2022-02-01"),
    end: parseISO("2022-05-01"),
});


data.start = startOfWeek(data.start, { weekStartsOn: 2 });
data.end = startOfWeek(data.end, { weekStartsOn: 2 });

data.vacationPeriods = [
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

const firstFriday = startOfWeek(data.start, { weekStartsOn: 5 });

const trainingDaysGeneral = eachDayOfInterval(data, { step: 7 });
const trainingDaysSelection = eachDayOfInterval({ start: firstFriday, end: data.end }, { step: 7 });

trainingDaysGeneral.forEach(date => {
    data.trainingDays.push({
        date,
        target: ["jeugd"],
        periodType: []
    });
});

trainingDaysSelection.forEach(date => {
    data.trainingDays.push({
        date,
        target: ["jeugd", "selectie"],
        periodType: []
    });
});

data.trainingDays = data.trainingDays.sort((x, y) => {
    return x.date.valueOf() - y.date.valueOf();
});

data.trainingDays.forEach(training => {
    const date = training.date;

    // Check if it's preparation period
    var daysToCompetition = data.competitions
        .filter(x => date < x.start)
        .map(x => differenceInDays(date, x.start))
        .reduce((pv, cv) => pv > cv ? pv : cv, Number.NEGATIVE_INFINITY);

    if (daysToCompetition !== Number.NEGATIVE_INFINITY &&
        Math.abs(daysToCompetition) < DAYS_TO_PREPARE_FOR_COMPETITION) {
        training.periodType.push("voorbereiding");
    }

    // Check if it's in the competition
    if (data.competitions.some(x => isAfter(date, x.start) && isBefore(date, x.end))) {
        training.periodType.push("competitie");   
    }

    // Check if it's vacation period
    if (data.vacationPeriods.some(x => isAfter(date, x.start) && isBefore(date, x.end))) {
        training.periodType.push("vakantie");
    }


});


// data.start