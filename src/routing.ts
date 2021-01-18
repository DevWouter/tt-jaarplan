import { readable, derived } from 'svelte/store';
import type { TrainingPeriod } from './types/training-period';
import type { TrainingPlan } from './types/training-plan';

import { years } from "./year";

interface RouteData {
  plan: TrainingPlan;
  period: TrainingPeriod;
}

function extractRouteData(hash: string) {
  const planRegex = /plan=(\w+)/.exec(hash);
  const periodRegex = /period=(\d+)/.exec(hash);

  if (!planRegex) return { plan: years.find(() => true), period: undefined };
  const plan = years.find(x => x.title == planRegex[1]);
  if (!periodRegex) return { plan, period: undefined };
  const periodKey = +periodRegex[1];
  const period = plan.trainingPeriods.find(x => x.key == periodKey);
  return { plan, period };
}

function getRoute(): RouteData {
  var routeData = extractRouteData(window.location.hash);
  return routeData;
}

export function setRoute(data: Partial<RouteData>) {
  var parameters: string[] = [];

  if (data.plan) {
    parameters.push(`plan=${data.plan.title}`);
  }

  if (data.period) {
    parameters.push(`period=${data.period.key}`);
  }

  location.hash = parameters.join("&");
}

const routeData = readable(getRoute(), (set) => {
  window.addEventListener('hashchange', () => set(getRoute()));
});

export const routePlan = derived(routeData, x => x.plan);
export const routePeriod = derived(routeData, x => x.period);
