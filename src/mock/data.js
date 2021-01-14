import { nanoid } from 'nanoid';
import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaWordpress, FaNodeJs, FaGitSquare, FaSass } from 'react-icons/fa'
import { SiJavascript, SiGatsby } from 'react-icons/si'
import { DiMongodb, DiNpm } from 'react-icons/di'

// HEAD DATA
export const headData = {
  title: '🕹️ Denis Skobalj', // e.g: 'Name | Developer'
  lang: 'se', // e.g: en, es, fr, jp
  description: 'Denis skobalj - portfoliehemsida', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hej🖖😃, mitt namn är',
  name: 'Denis Skobalj',
  subtitle: 'och jag är en frontend utvecklare bosatt i Malmö',
  cta: 'Mer om mig',
};

// ABOUT DATA
export const aboutData = {
  img: 'ress-01.jpg',
  paragraphOne: 'En glad, ödmjuk och lösningsorienterad grabb på 35 år. Har nära till skratt och har inte svårt att hitta sakera att underhålla mig med.',
  paragraphTwo: ' Har äntligen funnit det jag vill pyssla med resten av mitt liv - koda!  När jag inte gör det gillar jag styrketräning, discgolf och dataspel',
  paragraphThree: 'Frontendutvecklare med god känsla för färg, form och bidra till en god användarupplevelse',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
const projectsData = [

  {
    id: nanoid(),
    img: 'thum-nail.jpg',
    title: 'Pagination och sorting med react',
    info: 'Ett litet projekt jag skapade för testa pagination, sort och custom hooks.',
    info2: '',
    toolTitle: 'I verktygslådan:',
    tools: [<FaHtml5 />, <FaSass />, <FaReact />, <SiJavascript />, <SiGatsby />, <DiNpm />],
    url: 'https://epic-shirley-ec7a5b.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'zc-01.jpg',
    title: 'E-handel med wordpress som CMS',
    info: 'www.zebra-collection.se är en e-handel jag var med och utvecklade på min tid på zebra-collection.',
    info2: 'Är i botten byggt på en mall som där lagts till extra funktionalliteter som bland annat ett login för deras mediabank samt använding av google API:er. ',
    toolTitle: 'I verktygslådan:',
    tools: [<FaHtml5 />, <FaCss3 />, <FaWordpress />, <SiJavascript />],
    url: 'https://www.zebra-collection.se',
    repo: '', // if no repo, the button will not show up
  },
];


// CONTACT DATA
export const contactData = {
  cta: 'Hör av dig om du om har frågor!',
  btn: 'maila mig',
  email: 'denis.skobalj@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/denis-skobalj-35110774/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/d-skobalj',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

export default projectsData;