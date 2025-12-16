import type { Experience, Education, Profile } from '../types/Career';

export const profileData: Profile = {
  name: 'Alexandre Martin',
  title: 'Développeur Full Stack Senior',
  email: 'alexandre.martin@email.com',
  phone: '+33 6 12 34 56 78',
  location: 'Paris, France',
  summary: 'Développeur passionné avec plus de 8 ans d\'expérience dans le développement d\'applications web modernes. Spécialisé en Vue.js, TypeScript et Node.js, je m\'efforce de créer des solutions élégantes et performantes qui répondent aux besoins des utilisateurs.',
};

export const experienceData: Experience[] = [
  {
    id: 1,
    company: 'TechVision Solutions',
    position: 'Lead Developer Backend',
    startDate: '2022-03',
    endDate: null,
    description: 'Direction technique d\'une équipe de 5 développeurs. Conception et développement d\'une plateforme SaaS de gestion de projet avec plus de 50 000 utilisateurs actifs. Migration de l\'architecture legacy vers une architecture microservices.',
    skills: ['Vue.js 3', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  {
    id: 2,
    company: 'DataFlow Industries',
    position: 'Développeur Full Stack Senior',
    startDate: '2019-06',
    endDate: '2022-02',
    description: 'Développement de tableaux de bord analytiques en temps réel. Optimisation des performances frontend réduisant le temps de chargement de 60%. Mise en place de tests automatisés avec une couverture de 85%.',
    skills: ['React', 'Python', 'FastAPI', 'MongoDB', 'Redis', 'AWS'],
  },
  {
    id: 3,
    company: 'StartupLab Paris',
    position: 'Développeur Frontend',
    startDate: '2017-09',
    endDate: '2019-05',
    description: 'Développement d\'interfaces utilisateur pour des applications B2B. Collaboration étroite avec les designers UX/UI. Introduction des pratiques de développement Agile au sein de l\'équipe.',
    skills: ['Vue.js 2', 'JavaScript', 'SCSS', 'Webpack', 'Jest'],
  },
  {
    id: 4,
    company: 'WebAgency Plus',
    position: 'Développeur Web Junior',
    startDate: '2016-01',
    endDate: '2017-08',
    description: 'Création de sites web responsives pour des clients variés. Développement de thèmes WordPress personnalisés. Support technique et maintenance des applications existantes.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'WordPress', 'MySQL'],
  },
];

export const educationData: Education[] = [
  {
    id: 1,
    institution: 'École Polytechnique de Paris',
    degree: 'Master',
    field: 'Informatique et Systèmes Distribués',
    startYear: 2013,
    endYear: 2015,
    description: 'Spécialisation en architecture logicielle et systèmes distribués. Projet de fin d\'études sur l\'optimisation des bases de données NoSQL.',
  },
  {
    id: 2,
    institution: 'Université Paris-Saclay',
    degree: 'Licence',
    field: 'Informatique',
    startYear: 2010,
    endYear: 2013,
    description: 'Formation fondamentale en algorithmique, programmation et mathématiques appliquées.',
  },
];

