import asia from '../../assets/images/asiar.png';
import europe from '../../assets/images/europe1.png';
import northamerica from '../../assets/images/northamerica1.png';

function generateId() {
  return Math.random().toString(36).substring(2);
}

const metrics = [
  {
    id: generateId(),
    continent: 'asia',
    imageurl: asia,
    countries: ['china', 'india'],
    states: [
      ['hainan', 'sichuan', 'henan', 'anhui'],
      ['haryana', 'assam', 'nagaland', 'odisha'],
    ],
  },
  {
    id: generateId(),
    continent: 'europe',
    imageurl: europe,
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
    imageurl: northamerica,
    countries: ['canada', 'mexico'],
    states: [
      ['ontario', 'quebec', 'alberta', 'yukon'],
      ['sonora', 'guerrero', 'veracruz'],
    ],
  },
];

export default metrics;
