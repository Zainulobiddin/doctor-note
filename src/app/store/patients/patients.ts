import axios from "axios";
import { create } from "zustand";

export interface Patient {
  id: string | number;
  fullName: string;
  image: string;
  birthDate: string;
  address: string;
  phone: string;
  dateFirstVisit: string;
  diagnosis: string;
  symptoms: string;
  recipes: string;
  status: boolean;
}
export type NewPatient = Patient;

interface PatientsState {
  patients: Patient[];
  getPatients: () => Promise<void>;
  addPatient: (newPatient: NewPatient) => Promise<void>;
  searchPatients: (query: string) => Promise<void>

}

export const usePatientsStore = create<PatientsState>((set) => ({
  patients: [],

  getPatients: async () => {
    try {
      const { data } = await axios.get(
        `https://f5e013ee0d3b1bef.mokky.dev/patients`
      );
      set({ patients: data });
      console.log('patients: ', data)

    } catch (error) {
      console.error(error);
    }
  },

  addPatient: async (newPatient) => {
    try {
      const data = await axios.post(
        `https://f5e013ee0d3b1bef.mokky.dev/patients`,
        newPatient
      );
      set((state) => ({ patients: [...state.patients, data.data] }));
    } catch (error) {
      console.error(error);
    }
  },

  searchPatients: async (query: string) => {
    try {
      const data = await axios.get(
        `https://f5e013ee0d3b1bef.mokky.dev/patients?fullName=${query}`
      );
      set({patients: data.data})
    } catch (error) {
      console.error(error);
    }
  },
}));
