import axios from "axios";
import { create } from "zustand";

type RegisterForm = {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

type LoginForm = {
  fullName: string;
  password: string;
};

type AuthState = {
  register: (data: RegisterForm) => Promise<boolean>;
  login: (data: LoginForm) => Promise<boolean>;
  token: string | null;
  setToken: (token: string) => void;
};

export const useAuth = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),

  register: async (data) => {
    try {
      const response = await axios.post(
        `https://f5e013ee0d3b1bef.mokky.dev/register`,
        data
      );
      if (response.status === 200 || response.status === 201) {
        set({ token: response?.data?.token });
        return true;
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  login: async (data) => {
    try {
      const response = await axios.post(
        `https://f5e013ee0d3b1bef.mokky.dev/auth`,
        data
      );

      console.log(response);
      if ((response.status === 200 || response.status === 201) && response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        set({ token: response?.data?.token });
        return true;
      }
      return true
    } catch (error) {
      console.error(error);
      return false;
    }
  },
}));
