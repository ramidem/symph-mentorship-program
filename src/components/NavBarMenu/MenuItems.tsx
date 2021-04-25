import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.li`
  margin-right: 40px;

  a {
    color: var(--secondary-color);
    text-decoration: none;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

function MenuItems() {
  // const signInButton = (
  //   <li key="signin">
  //     <StyledButton href="/" disabled>Sign In</StyledButton>
  //   </li>
  // );

  const menu = [
    { link: 'https://bit.ly/symph-mentorship', name: 'How it Works' },
    { link: '/mentors', name: 'Mentors' },
    { link: 'https://forms.gle/DLBTke8sBqCWLCXH7', name: 'Become a Mentee' },
  ];

  const menuItems = menu
    .map((item) => (
      <Item key={item.link}>
        {item.link === '/mentors' ? (
          <Link to={item.link}>{item.name}</Link>
        ) : (
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.name}
          </a>
        )}
      </Item>
    ));
    // .concat(signInButton);

  return (
    <>
      {menuItems}
    </>
  );
}

export default MenuItems;
