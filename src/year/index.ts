import { year2021 } from "./year-2021";
import type { Interval } from 'date-fns';
import { isWithinInterval, add } from 'date-fns';
import type { SkillTest } from "../types/skill-test";
import type { ReviewType } from "../types/review";

export const years = [
  year2021,
];

var allReviews: Review[] = [];

years.forEach(year => {
  year.trainingPeriods.forEach(tp => {
    const reviews = tp.reviews ?? [];
    reviews.forEach(r => {
      const date = add(tp.start, r.after);
      allReviews.push({
        date,
        reviewType: r.reviewType,
        test: r.test,
      })
    });
  });
});

allReviews = allReviews.sort((a, b) => a.date.valueOf() - b.date.valueOf());


export interface Review {
  date: Date;
  reviewType: ReviewType;
  test: SkillTest;
}

export function getReviewsIn(interval: Interval) {
  return allReviews.filter(x => isWithinInterval(x.date, interval));
}

