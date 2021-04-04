import { Button } from 'reactstrap';
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

const StyledButton = styled(Button)`
  padding: 10px 60px;
  background: #3eb6d0;
  border: none;
  border-radius: 9999px;
  color: #ffffff;
`;

function MenuItems() {
  const signInButton = (
    <li key="signin">
      <a href="/">
        <StyledButton>Sign In</StyledButton>
      </a>
    </li>
  );

  const menu = [
    { link: 'https://bit.ly/symph-mentorship', name: 'How it Works' },
    { link: '/link1', name: 'Mentors' },
    { link: '/link2', name: 'Blog' },
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
