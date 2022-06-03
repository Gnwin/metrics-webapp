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
      [['china'], ['hainan', 'sichuan', 'henan', 'anhui']],
      [['india'], ['haryana', 'assam', 'nagaland', 'odisha']],
    ],
  },
  {
    id: generateId(),
    continent: 'europe',
    imageurl: europe,
    countries: ['germany', 'italy', 'spain'],
    states: [
      [['germany'], ['berlin', 'bavaria', 'saxony', 'hessen']],
      [['italy'], ['lazio', 'tuscany', 'campania', 'marche']],
      [['spain'], ['castilla-la_mancha', 'melilla', 'canarias', 'asturias']],
    ],
  },
  {
    id: generateId(),
    continent: 'northamerica',
    imageurl: northamerica,
    countries: ['canada', 'mexico'],
    states: [
      [['canada'], ['ontario', 'quebec', 'alberta', 'yukon']],
      [['mexico'], ['sonora', 'guerrero', 'veracruz']],
    ],
  },
];

export default metrics;
