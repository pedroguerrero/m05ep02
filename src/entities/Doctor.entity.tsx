export interface Doctor {
  id?: number;
  name: string;
  img?: string;
  specialty: string;
  experience: number;
  description: string;
}

export interface DoctorsContextType {
  doctors: Doctor[];
  doctor: Doctor;
  setDoctor: (doctor: Doctor) => void;
  setDoctors: (doctor: Doctor[]) => void;
  showModalDoctor: boolean;
  setShowModalDoctor: (show: boolean) => void;
}
