import involvedImg from '../../assets/images/involved.png';
import menteeImg from '../../assets/images/mentee.png';
import mentorImg from '../../assets/images/mentor.png';

import FaqCard from './FaqCard';

function SubSection() {
  const details = [
    {
      img: involvedImg,
      title: 'Who is Involved?',
      body: `
        Mentoring provides an opportunity to affect the future; you transmit a
        part of yourself to each person you mentor – your ideals, ethics, and
        professionalism. This legacy continues long after you retire. By helping
        a mentee succeed, you will rediscover your passion for tech such as in
        development, design, marketing, sales, etc. You can learn new skills,
        and gain the satisfaction of knowing that you have made a difference in
        someone’s life.
      `,
      imageLeft: true,
    },
    {
      img: menteeImg,
      title: 'How can I become a mentee?',
      body: `
        This is the first step of being a mentee!
        You are fueled with the passion to succeed in your career, willing to
        learn and put the time and effort to practice tips and advice from your
        mentor and you are clear in communicating your strengths and weaknesses
        as well as updating us on your progress in the program to further grow.
        And have respect for the program, honesty, and open-mindedness in
        getting feedback, and maintain the dedication and positivity in seeing
        the 4-month program until the end.
      `,
      imageLeft: false,
    },
    {
      img: mentorImg,
      title: 'Who qualifies to be a mentor?',
      body: `
        Someone who has good experience in the industry who is willing to guide
        and advise mentees on their careers and has the capacity to meet with
        them frequently according to the schedule they set at the start of the
        mentorship program. Mentors are also distinguished individuals in the
        community who made amazing contributions and continued to make great
        impacts in each of their fields. Most mentors were nominated by people
        interested to be their mentees.
      `,
      imageLeft: true,
    },
  ];

  const renderFaqCards = details.map((detail) => (
    <FaqCard
      key={detail.title}
      img={detail.img}
      title={detail.title}
      body={detail.body}
      imageLeft={detail.imageLeft}
    />
  ));

  return <>{ renderFaqCards }</>;
}

export default SubSection;
