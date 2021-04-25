import React from 'react';
import {
  Col,
  Modal,
  ModalBody,
  Row,
} from 'reactstrap';
import styled from 'styled-components';
import { MentorImageContainer } from '../../shared/styledComponents';

const ModalExample = (props: any) => {
  const {
    toggle,
    modal,
    mentor,
  } = props;

  return (
    <>
      <Modal
        backdrop
        centered
        isOpen={modal}
        toggle={toggle}
        size="xl"
      >
        <ModalBody>
          <Row className="p-5">
            <Col md={12} lg={2} className="mr-5">
              <MentorImageContainer>
                <div className="innerImage">
                  <img
                    src={mentor?.image}
                    alt={mentor?.name}
                    width="auto"
                    height="100%"
                  />
                </div>
              </MentorImageContainer>
            </Col>
            <ModalBodyCol md={12} lg={8}>
              <h5>{mentor?.name}</h5>
              <p className="title">{mentor?.expertise}</p>
              <p>{mentor?.bio}</p>
              <p className="topics">
                <strong>TOPICS: </strong>
                {mentor?.topics}
              </p>
            </ModalBodyCol>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalExample;

const ModalBodyCol = styled(Col)`
  h5 {
    text-transform: uppercase;
    color: var(--primary-color);
  }

  .title {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #8c8c8c;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }

  .topics {
    font-size: 14px;
    font-weight: 400;
    line-height: 29px;

    strong {
      color: #9c9c9c;
    }
  }
`;
