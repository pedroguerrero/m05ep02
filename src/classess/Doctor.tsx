import { Doctor as IDoctor } from '../entities/Doctor.entity';

export class Doctor implements IDoctor {
  id?: number;
  name: string;
  img?: string;
  specialty: string;
  experience: number;
  description: string;

  constructor(doctor: IDoctor) {
    this.id = doctor.id;
    this.name = doctor.name;
    this.img = doctor.img;
    this.specialty = doctor.specialty;
    this.experience = doctor.experience;
    this.description = doctor.description;
  }
  getData(): string {
    return `${this.name} is a ${this.specialty} with ${this.experience} years of experience`;
  }

  setSpecialty(specialty: string): void {
    this.specialty = specialty;
  }

  getSpecialty(): string {
    return this.specialty;
  }
}
