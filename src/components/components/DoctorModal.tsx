import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';
import Modal from './Modal';
import Container from './Container';
import { DoctorsContext } from '../../store/DoctorsContext';

interface DoctorModalProps {
  title?: string;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({
  title = '"Agendar Paciente"',
  showModal,
  setShowModal,
}) => {
  const {
    doctor: { name, specialty, experience, description },
  } = useContext(DoctorsContext);
  return ReactDOM.createPortal(
    <Modal
      title={title}
      showModal={showModal}
      onClose={() => setShowModal(false)}
    >
      <Container className="container">
        <Row>
          <Container className="col-md-12">
            <p>
              Nombre: <strong>{name}</strong>
            </p>

            <p>
              Especialidad: <strong>{specialty}</strong>
            </p>

            <p>
              Experiencia: <strong>{experience} años</strong>
            </p>

            <p>
              Descripcion: <strong>{description}</strong>
            </p>
          </Container>
        </Row>
      </Container>
    </Modal>,
    document.getElementById('doctor-modal') as HTMLElement
  );
};

export default DoctorModal;
