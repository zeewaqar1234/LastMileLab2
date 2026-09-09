// Static mock data for the isolated Concept 2 visual prototype.
// This file is intentionally not imported by the production Streamlit application.

const prototypeData = {
  brand: {
    name: 'LastMile Lab',
    subtitle: 'CVRP route optimization',
    author: 'Syed Danish Ali',
    year: 2026,
  },
  scenarios: [
    {
      id: 'vienna',
      name: 'Vienna Standard 24',
      customers: 24,
      vehicles: 4,
      capacity: 100,
      baselineDemand: 87.4,
      optimizedDemand: 76.2,
      baselineKm: 122.4,
      optimizedKm: 97.2,
      improvement: 20.6,
      generatedAt: '2026-09-09 10:24 UTC',
    },
    {
      id: 'tight',
      name: 'Tight Capacity 24',
      customers: 24,
      vehicles: 6,
      capacity: 100,
      baselineDemand: 94.8,
      optimizedDemand: 81.6,
      baselineKm: 138.7,
      optimizedKm: 112.9,
      improvement: 18.6,
      generatedAt: '2026-09-09 10:26 UTC',
    },
    {
      id: 'wide',
      name: 'Wide Geography 24',
      customers: 24,
      vehicles: 3,
      capacity: 100,
      baselineDemand: 74.6,
      optimizedDemand: 60.8,
      baselineKm: 186.2,
      optimizedKm: 141.4,
      improvement: 24.1,
      generatedAt: '2026-09-09 10:29 UTC',
    },
  ],
  copy: {
    kicker: 'CAPACITATED VEHICLE ROUTING PROBLEM (CVRP)',
    title: 'Optimize fleet routing to minimize travel distance under capacity constraints',
    intro: 'LastMile Lab models a static, single-depot Capacitated Vehicle Routing Problem (CVRP) for last-mile delivery. It determines how customer demand is assigned across vehicles and the sequence in which each route serves its customers.',
    objective: 'Minimize the total estimated distance travelled across all active vehicle routes while serving every customer.',
    capacity: 'Each customer has an unsplit tote demand, and the total demand assigned to a vehicle cannot exceed its available capacity.',
    feasibility: 'Every customer must be served exactly once, and every active vehicle route starts and returns to the depot.',
    comparison: 'Compare a deterministic nearest-neighbour baseline with an optimized route plan to evaluate the reduction in total fleet distance.',
    result: '122.4 km → 97.2 km · 20.6% shorter',
  },
};

window.prototypeData = prototypeData;

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.dataset.prototypeReady = 'true';
});

// End of isolated visual prototype data.
// No API calls, solver logic, or application state are connected here.#+#+#+#+
