import styled from 'styled-components';
import { Button } from 'reactstrap';

export const HeadingOne = styled.h1`
  color: var(--primary-color);
`;

export const HeadingParagraph = styled.p`
  font-size: 24px;
`;

export const StyledButton = styled(Button)`
  padding: 10px 60px;
  background: #3eb6d0;
  border: none;
  border-radius: 9999px;
  color: #ffffff;
`;

export const MentorImageContainer = styled.div`
  margin-bottom: 30px;
  padding: 10px;
  height: 165px;
  width: 165px;
  background-color: white;
  border: 1px solid var(--primary-color);
  border-radius: 9999px;

  .innerImage {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
  }
`;
