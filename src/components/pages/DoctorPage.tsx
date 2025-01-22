import React, { useState, useEffect, useContext } from 'react';
import background from '../../assets/bg-2.jpg';
import { getDoctors } from '../utils/doctor';
import Row from '../components/Row';
import Button from '../components/Button';
import Loading from '../components/Loading';
import Container from '../components/Container';
import DoctorList from '../components/DoctorList';
import DoctorModal from '../components/DoctorModal';
import { DoctorsContext } from '../../store/DoctorsContext';
import { Doctor as IDoctor } from '../../entities/Doctor.entity';
import { Doctor } from '../../classess/Doctor';

export default function DoctorPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { doctors, setDoctors, showModalDoctor, setShowModalDoctor } =
    useContext(DoctorsContext);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[] | IDoctor[]>(
    []
  );

  const filterBySpec = (specialty: string) => {
    specialty = specialty
      .toLowerCase()
      .replaceAll('á', 'a')
      .replaceAll('é', 'e')
      .replaceAll('í', 'i')
      .replaceAll('ó', 'o')
      .replaceAll('ú', 'u');
    const filteredDoctors = doctors
      .filter((doctor) =>
        doctor.specialty
          .toLowerCase()
          .replaceAll('á', 'a')
          .replaceAll('é', 'e')
          .replaceAll('í', 'i')
          .replaceAll('ó', 'o')
          .replaceAll('ú', 'u')
          .includes(specialty)
      )
      .map((doctor) => new Doctor(doctor));

    setFilteredDoctors(filteredDoctors);

    return filteredDoctors;
  };

  const getAllDoctors = () => {
    setIsLoading(true);

    return new Promise((resolve, reject) => {
      getDoctors()
        .then((data) => {
          setDoctors(data);
          setFilteredDoctors(data);
          setIsLoading(false);

          resolve(true);
        })
        .catch(() => {
          setIsLoading(false);

          reject('Error al obtener los medicos');
        });
    });
  };

  useEffect(() => {
    if (doctors.length) {
      setFilteredDoctors(doctors);
      setIsLoading(false);
      return;
    }

    getAllDoctors().catch((error) => alert(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doctors]);

  return (
    <React.Fragment>
      <DoctorModal
        title="Información del Doctor"
        showModal={showModalDoctor}
        setShowModal={setShowModalDoctor}
      />
      <main>
        <section
          className="medical-team-section"
          style={{
            padding: '200px',
            background: `url(${background}) no-repeat`,
            backgroundSize: 'cover',
          }}
        >
          <Container className="container text-center">
            <Row>
              <Container className="col">
                <h1>Equipo médico</h1>
                <p className="fs-4">
                  Conoce a nuestro equipo médico, un grupo de profesionales
                  altamente capacitados y dedicados a tu bienestar. Cada miembro
                  aporta experiencia, compromiso y un enfoque humano para
                  brindarte la mejor atención posible. Estamos aquí para cuidar
                  de ti en cada paso del camino hacia la recuperación.
                </p>
              </Container>
            </Row>
          </Container>
        </section>

        <section>
          <Container className="container">
            <Row>
              <Container className="col text-center mt-5 mb-5">
                <h2>Equipo médico</h2>
              </Container>
            </Row>

            <Row>
              <Container className="col-md-4 offset-md-8 text-end">
                <Button
                  className="btn btn-primary"
                  onClick={async () => {
                    try {
                      await getAllDoctors();
                    } catch (error) {
                      alert(error);
                      alert('Obteniendo doctores nuevamente');

                      getAllDoctors().then((error) => console.log(error));
                    }
                  }}
                >
                  Recargar lista de Doctores
                </Button>
              </Container>
            </Row>

            <Row>
              <Container className="col-md-4 offset-md-8 text-end mt-2">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Buscar por especialidad"
                  onChange={(e) => filterBySpec(e.target.value)}
                />
              </Container>
            </Row>

            {isLoading ? (
              <Loading size="5rem" />
            ) : (
              <DoctorList className="mt-5" doctors={filteredDoctors} />
            )}
          </Container>
        </section>
      </main>
    </React.Fragment>
  );
}
