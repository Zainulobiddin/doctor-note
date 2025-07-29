import axios from "axios";
import { create } from "zustand";

type RegisterForm = {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

type AuthState = {
  register: (data: RegisterForm) => Promise<void>;
};

export const useAuth = create<AuthState>(() => ({
  register: async (data) => {
    try {
      await axios.post(`https://f5e013ee0d3b1bef.mokky.dev/register`, { data });
    } catch (error) {
      console.error(error);
    }
  },
}));
