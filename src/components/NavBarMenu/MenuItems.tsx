import styled from 'styled-components';

import { StyledButton } from '../../shared/styledComponents';

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
  const signInButton = (
    <li key="signin">
      <StyledButton href="/">Sign In</StyledButton>
    </li>
  );

  const menu = [
    { link: 'https://bit.ly/symph-mentorship', name: 'How it Works' },
    { link: '/link1', name: 'Mentors' },
    { link: 'https://forms.gle/DLBTke8sBqCWLCXH7', name: 'Become a Mentee' },
  ];

  const menuItems = menu
    .map((item) => (
      <Item key={item.link}>
        <a href={item.link}>{item.name}</a>
      </Item>
    ))
    .concat(signInButton);

  return (
    <>
      {menuItems}
    </>
  );
}

export default MenuItems;
