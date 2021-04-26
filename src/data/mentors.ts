import albertImg from '../assets/images/mentors/albert.jpg';
import arnelleImg from '../assets/images/mentors/arnelle.jpg';
import bryantImg from '../assets/images/mentors/bryant.jpg';
import danImg from '../assets/images/mentors/dan.jpg';
import daveImg from '../assets/images/mentors/dave.jpg';
import franchetteImg from '../assets/images/mentors/franchette.jpg';
import jarrheyImg from '../assets/images/mentors/jarrhey.jpg';
import jessaImg from '../assets/images/mentors/jessa.jpg';
import johnreyImg from '../assets/images/mentors/johnrey.jpg';
import lenliImg from '../assets/images/mentors/lenli.jpg';
import raffImg from '../assets/images/mentors/raff.jpg';
import timImg from '../assets/images/mentors/tim.jpg';

export type Mentor = {
  name: string;
  expertise: string;
  image: string;
  numberOfMentees: number;
  bio: string;
  topics: string;
}

export const mentors: Mentor[] = [
  {
    name: 'Albert Padin',
    expertise:
      'CTO, Symph',
    image: albertImg,
    numberOfMentees: 3,
    bio:
      'Albert is a developer and entrepreneur who\'s worked on consumer, enterprise, and government software products. He is the co-founder and CTO of Symph, a design, development, and startup studio. At Symph, he has architected and developed solutions for 500 Startups, Office of the President of the Philippines, and the World Bank.',
    topics: 'Running a Tech Company, Startups, Career Growth, Development, Project Management',
  },
  {
    name: 'Arnelle Balane',
    expertise: 'GDE, Web Technologies',
    image: arnelleImg,
    numberOfMentees: 3,
    bio:
      'Arnelle is a Web developer from Cebu, Philippines and a Google Developers Expert for Web Technologies who enjoys building things with good old HTML, CSS, JavaScript, and Web Platform APIs. He is an active volunteer and speaker for GDG Cebu and other local JavaScript communities. When not busy experimenting with new Web APIs, he can also be seen taking photos, playing video games, or practicing his card tricks.',
    topics: 'Web Development',
  },
  {
    name: 'Johnrey Evangelista',
    expertise: 'Full-Stack Developer, Symph',
    image: johnreyImg,
    numberOfMentees: 1,
    bio:
      'Johnrey is an end-to-end developer at Symph. He has developed multiple web and mobile applications using technologies like React, Typescript, and PostgreSQL. He strives to continuously improve and always learn. On his free time, he enjoys watching series or documentaries, trekking, and camping.',
    topics: 'Web Development, React.JS',
  },
  {
    name: 'Franchette Camoro',
    expertise: 'Full-Stack Developer, Symph',
    image: franchetteImg,
    numberOfMentees: 1,
    bio:
      'Franchette is a Full Stack Developer at Symph and is the WTM Ambassador for GDG Cebu. She has contributed to many tech events here in Cebu and wishes to see an improvement on the quality of programmers locally. She\'s also an advocate for mental health awareness, and hopes to create a better environment for future filipinos who struggle and feel alone in their battles.',
    topics: 'Software Development',
  },
  {
    name: 'Raffy Abenoja',
    expertise: 'Graphics Designer, Symph',
    image: raffImg,
    numberOfMentees: 4,
    bio:
      'Raff is a front-end developer-wannabe from Symph. Besides this, he is an artist/illustrator/graphic designer who also used to be a mass communications graduate. He aims to empower people to think outside the box and unleash their inner creativity, no matter the process. He won\'t bite, though - he promised. ',
    topics: 'Graphic Illustration, Creative Writing',
  },
  {
    name: 'Lenli Tuhoy',
    expertise: 'Content Creator, Symph',
    image: lenliImg,
    numberOfMentees: 2,
    bio:
      'Lenli is the Marketing Content Creator at Symph. In her elementary - highschool years, she was L\'s Magazine Writer & Editor-in-Chief and during her college years, she also became a writer and associate editor for USJR’s FORWARD Publications.',
    topics: 'Writing',
  },
  {
    name: 'Tim Ouano',
    expertise: 'Full-Stack Developer, Symph',
    image: timImg,
    numberOfMentees: 3,
    bio:
      'Tim has been making videos since he was in elementary, selling edited videos to his classmate\'s parents for extra allowance. He has been doing Youtube since 2011, improved his editing, started The Ten Seconds Show with Raff, and live streams his games on his FB page, Timmyboy. On the side, he also sells street wear in his shop, 3VO.',
    topics: 'Videography, Video Editing',
  },
  {
    name: 'Dave Overton',
    expertise: 'CEO, Symph',
    image: daveImg,
    numberOfMentees: 1,
    bio:
      'Dave Overton is the Founder and CEO of Symph – a design, development and digital marketing studio. Symph designs and develops for brands and startups and creates awesome things that people love. Prior to starting Symph, he was the CIO at Bigfoot - a media and entertainment company – where he oversaw all technology and digital media assets. He has a BA in International Economics from San Diego State University.',
    topics: 'Business',
  },
  {
    name: 'Dan Pantinople',
    expertise: 'CDO, Symph',
    image: danImg,
    numberOfMentees: 1,
    bio:
      'Self-taught and design driven, Dan officially started his design career a few months after dropping out of nursing school. He taught himself how to do digital design and front-end coding, he then started freelance design work for various local and international companies. In 2013, Dan partnered with Dave and Albert, where he designed and developed websites and mobile apps for internal startups and clients.',
    topics: 'Design',
  },
  {
    name: 'Jarrhey de la Peña',
    expertise: 'COO, Symph',
    image: jarrheyImg,
    numberOfMentees: 1,
    bio:
      'Jarrhey is the Chief of Operations in Symph where he also worked as a Project Manager. He graduated with a degree of BS Computer Engineering. Freelanced in Photography, Video, and Frontend Dev during college.',
    topics: 'Project Management',
  },
  {
    name: 'Bryant Gonzales',
    expertise: 'Finance Manager, Symph',
    image: bryantImg,
    numberOfMentees: 1,
    bio:
      'Bryant is the go-to-finance-coach of symphers at late night. With a degree in BS Economics - Business, experience handling corporate finance, and an improved handling of his personal finance (yey!), Bryant hopes to be of help for you to realize financial independece. He is currently studying Master of Public Management at UP Open University and a Data Scientist scholar at DOST\'s Project SPARTA.',
    topics: 'Personal Finance Management',
  },
  {
    name: 'Jessa Pedrola',
    expertise: 'Full-Stack Developer',
    image: jessaImg,
    numberOfMentees: 1,
    bio:
      'With more than 3 years experience as a treasurer during high school and college, Jessa had always enjoyed handling finances— tracking everything down to the last centavo. Inspired by the many financial books she read, she started ticking her financial goals with the habits she learned and formed. She advocates for financial literacy (mostly to her friends) and would love to help anyone kickstart their financial journey.',
    topics: 'Personal Finance',
  },
];
