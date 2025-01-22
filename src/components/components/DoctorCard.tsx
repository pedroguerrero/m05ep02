import React, { useContext } from 'react';
import { DoctorsContext } from '../../store/DoctorsContext';
import Image from './Image';
import Button from './Button';
import Container from './Container';

interface DoctorCardProps {
  img?: string;
  name: string;
  specialty: string;
  experience: number;
  description: string;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  img,
  name,
  specialty,
  experience,
  description,
}) => {
  const { setDoctor, setShowModalDoctor } = useContext(DoctorsContext);

  return (
    <Container className="col-md-3 mb-5">
      <Container className="card text-center">
        <Image src={img} className="card-img-top" alt="..." />

        <Container className="card-body">
          <h3 className="card-title">{name}</h3>
          <h5>{specialty}</h5>
          <p className="card-text">
            {description}
            <br />
            <strong>Experiencia:</strong> {experience} años
          </p>
          <Button
            className="btn btn-primary"
            onClick={() => {
              setDoctor({ name, specialty, experience, description });

              setShowModalDoctor(true);
            }}
          >
            Ver Info
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default DoctorCard;
