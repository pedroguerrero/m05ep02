import React from 'react';
import Button from './Button';
import Container from './Container';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  showModal: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  showModal,
  onClose,
}) => {
  return (
    <Container
      className="modal fade show"
      tabIndex={-1}
      style={{
        display: `${showModal ? 'block' : 'none'}`,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Container className="modal-dialog">
        <Container className="modal-content">
          <Container className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {title}
            </h5>
            <Button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
              onClick={onClose}
            ></Button>
          </Container>
          <Container className="modal-body">{children}</Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Modal;
