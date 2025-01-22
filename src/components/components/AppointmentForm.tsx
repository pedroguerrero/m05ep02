import React from 'react';
import Button from './Button';
import Container from './Container';
import { Doctor } from '../../entities/Doctor.entity';

interface AppointmentFormProps {
  setPatientAttribute: (key: string, value: string | number) => void;
  patient: {
    name: string;
    date: string;
    doctor: string;
    doctorId: number;
    price: number;
  };
  doctors: Doctor[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  setPatientAttribute,
  patient,
  doctors,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Container className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          className="form-control"
          placeholder="Nombre"
          onChange={(event) =>
            setPatientAttribute('name', event.target.value.trim())
          }
          value={patient.name}
        />
      </Container>

      <Container className="mb-3">
        <label className="form-label">Fecha</label>
        <input
          className="form-control"
          placeholder="Fecha"
          type="date"
          onChange={(event) => setPatientAttribute('date', event.target.value)}
          value={patient.date}
        />
      </Container>

      <Container className="mb-3">
        <label className="form-label">Doctor</label>
        <select
          value={patient.doctorId}
          className="form-select"
          onChange={(event) => {
            const doctorId = Number(event.target.value);
            const { name } = doctors.find(
              (doctor) => doctor.id === doctorId
            ) as Doctor;
            setPatientAttribute('doctor', name);
            setPatientAttribute('doctorId', doctorId);
          }}
        >
          <option value="0" disabled={true}>
            Seleccione un medico
          </option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
      </Container>

      <Container className="mb-3">
        <label className="form-label">Valor Consulta</label>
        <input
          className="form-control"
          placeholder="10000"
          type="number"
          onChange={(event) =>
            setPatientAttribute('price', Number(event.target.value))
          }
          value={patient.price}
        />
      </Container>

      <Container className="mb-3 text-end">
        <Button type="submit" className="btn btn-primary">
          Guardar
        </Button>
      </Container>
    </form>
  );
};

export default AppointmentForm;
