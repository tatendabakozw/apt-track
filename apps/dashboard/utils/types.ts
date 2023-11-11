/* eslint-disable @typescript-eslint/no-explicit-any */

export interface DriverType {
  name: string;
  phone: string;
  bus?: string;
  status: string;
  _id: string;
}

export interface UserProps {
  email: string;
  token: string;
  photoURL: string;
  role: string;
  emailVerified: boolean;
  username: boolean;
  _id: string;
  company: {
    name: string;
    logo: string;
  };
}

export interface ContextType {
  darkMode: boolean;
  userInfo: UserProps;
  search_query: string;
  dispatch?: any;
  state?: any;
}
