/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ContextType {
  darkMode: boolean;
  userInfo: string;
  search_query: string;
  dispatch?: any
  state?:any
}

export interface DriverType{
  name: string;
  phone: string;
  bus?:string;
  status: string;
  _id: string
}