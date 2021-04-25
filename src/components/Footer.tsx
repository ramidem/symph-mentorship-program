import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <span>Made with ❤️ by Symph.</span>
      <br />
      <span className="copyright">© 2021 Symph. All Rights Reserved.</span>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  margin-bottom: 70px;
  margin-top: 120px;
  text-align: center;

  span.copyright {
    font-size: 14px;
    font-weight: 400;
    line-height: 31px;
    color: #9c9c9c;
  }
`;
