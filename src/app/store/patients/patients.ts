import axios from "axios";
import { create } from "zustand";

interface Patient {
  id: string | number;
  fullName: string;
  image: string;
  birthDate: string;
  address: string;
  phone: string;
  dateFirtVisit: string;
  diagnosis: string;
  symptoms: string;
  recipes: string;
  notes: string;
  status: boolean;
}

interface PatientsState {
  patients: Patient[];
  getPatients: () => Promise<void>;
}

export const usePatientsStore = create<PatientsState>((set) => ({
  patients: [],

  getPatients: async () => {
    try {
      const { data } = await axios.get(
        `https://f5e013ee0d3b1bef.mokky.dev/patients`
      );
      set({ patients: data });
    } catch (error) {
      console.error(error);
    }
  },

//   addPatients: async (formData) => {
//     try {
        
//     } catch (error) {
//         console.error(error);
        
//     }
//   }


}));
