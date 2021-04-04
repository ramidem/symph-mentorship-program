import { Button } from "reactstrap";
import styled from "styled-components";


function MenuItems() {
  const signInButton = (
    <li key="signin">
      <a href="/">
        <StyledButton>Sign In</StyledButton>
      </a>
    </li>
  )

  const menu = [
    { link: "/link", name: "How it Works" },
    { link: "/link1", name: "Mentors" },
    { link: "/link2", name: "Blog" },
    { link: "/link3", name: "Become a Mentee" },
  ]

  const menuItems = menu
    .map((item) => {
      return (
        <Item key={item.link}>
          <a href={item.link}>{item.name}</a>
        </Item>
      )
    })
    .concat(signInButton)

  return (
    <>
      {menuItems}
    </>
  )
}

const StyledButton = styled(Button)`
  background: #3eb6d0;
  border: none;
  border-radius: 9999px;
  color: #ffffff;
  padding: 10px 60px;
`

const Item = styled.li`
  margin-right: 40px;

  a {
    color: var(--secondary-color);
    text-decoration: none;

    &:hover {
      color: var(--primary-color);
    }
  }
`

export default MenuItems;
