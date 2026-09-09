// Static copy and scenario metadata for the isolated Concept 2 prototype only.
const prototypeData = {
  brand: { name: 'LastMile Lab', author: 'Syed Danish Ali', year: 2026 },
  reference: { name: 'Vienna Standard', baselineKm: 122.394, optimizedKm: 97.193, improvement: 20.6, served: '24/24 customers served' },
  scenarios: [
    { id: 'vienna', name: 'Vienna Standard 24', customers: 24, vehicles: 4, capacity: 100, baselineKm: 122.4, optimizedKm: 97.2, improvement: 20.6 },
    { id: 'tight', name: 'Tight Capacity 24', customers: 24, vehicles: 6, capacity: 100, baselineKm: 138.7, optimizedKm: 112.9, improvement: 18.6 },
    { id: 'wide', name: 'Wide Geography 24', customers: 24, vehicles: 3, capacity: 100, baselineKm: 186.2, optimizedKm: 141.4, improvement: 24.1 }
  ],
  copy: {
    kicker: 'CAPACITATED VEHICLE ROUTING PROBLEM (CVRP)',
    title: 'Optimize fleet routing to minimize travel distance under capacity constraints',
    intro: 'LastMile Lab models a static, single-depot Capacitated Vehicle Routing Problem (CVRP) for last-mile delivery. It determines how customer demand is assigned across vehicles and the sequence in which each route serves its customers.'
  }
};
window.prototypeData = prototypeData;
