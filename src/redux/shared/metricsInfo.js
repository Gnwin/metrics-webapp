function generateId() {
  return Math.random().toString(36).substring(2);
}

const metrics = [
  {
    id: generateId(),
    continent: 'asia',
    countries: ['china', 'india'],
    states: [
      ['hainan', 'sichuan', 'henan', 'anhui'],
      ['haryana', 'assam', 'nagaland', 'odisha'],
    ],
  },
  {
    id: generateId(),
    continent: 'europe',
    countries: ['germany', 'italy', 'spain'],
    states: [
      ['berlin', 'bavaria', 'saxony', 'hessen'],
      ['lazio', 'tuscany', 'campania', 'marche'],
      ['castilla-la_mancha', 'melilla', 'canarias', 'asturias'],
    ],
  },
  {
    id: generateId(),
    continent: 'northamerica',
    countries: ['canada', 'mexico'],
    states: [
      ['ontario', 'quebec', 'alberta', 'yukon'],
      ['sonora', 'guerrero', 'veracruz'],
    ],
  },
];

export default metrics;
