import Row from './Row';
import DoctorCard from './DoctorCard';
import React from 'react';
import { Doctor } from '../../entities/Doctor.entity';

interface DoctorListProps {
  doctors: Doctor[];
  className?: string;
}

const DoctorList: React.FC<DoctorListProps> = ({ doctors }) => {
  return (
    <Row>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} {...doctor} />
      ))}
    </Row>
  );
};

export default DoctorList;
