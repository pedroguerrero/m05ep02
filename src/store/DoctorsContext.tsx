import { createContext } from 'react';
import { DoctorsContextType } from '../entities/Doctor.entity';

export const DoctorsContext = createContext<DoctorsContextType>(
  {} as unknown as DoctorsContextType
);
