import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';

type FaqProps = {
  img: string
  body: string
  title: string
  imageLeft: boolean
}

const FaqWrapper = styled(Row)`
  margin: 120px 0;
  line-height: 1.8em;
`;

const FaqHeaderFour = styled.h4`
  margin-bottom: 25px;
  color: var(--primary-color);
`;

function FaqCard(props: FaqProps) {
  const {
    img,
    title,
    body,
    imageLeft,
  } = props;

  const size = useWindowSize();

  const orderLeft = 'order-1';
  const orderRight = 'order-2';

  const sideBySideImageLeft = `${imageLeft ? orderLeft : orderRight}`;
  const sideBySideImageRight = `${imageLeft ? orderRight : orderLeft}`;
  const stackedImageBottom = {
    details: 'order-1',
    image: 'order-2',
  };
  const isMediumDisplay = (size.width as number) <= 991;

  return (
    <FaqWrapper>
      <Col
        lg={6}
        md={12}
        className={
          isMediumDisplay ? stackedImageBottom.details : sideBySideImageRight
        }
      >
        <FaqHeaderFour>{title}</FaqHeaderFour>
        <p>{body}</p>
      </Col>
      <Col
        lg={6}
        md={12}
        className={`mr-auto ${
          isMediumDisplay ? stackedImageBottom.image : sideBySideImageLeft
        }`}
      >
        <img src={img} alt={title} width="100%" />
      </Col>
    </FaqWrapper>
  );
}

export default FaqCard;
