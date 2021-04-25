import {
  Modal,
  ModalBody,
} from 'reactstrap';

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
        isOpen={modal}
        toggle={toggle}
      >
        <ModalBody>
          <h1>{mentor?.name}</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalExample;
