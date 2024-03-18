
export interface TableDataType {
    id: string | number;
    fullName: string;
    userName: string;
    address: string;
}
export interface ColumnType {
    id: string;
    label: string;
    minWidth: number;
}
export interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
}
export interface customizedTablesPropType {
  columns : ColumnType[];
  rows : TableDataType[];
  deleteUser :unknown;
}
export interface userDataType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Geo {
  lat: string;
  lng: string;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface useQueryParmsDataType {
  meta:any;
  queryKey?: (string | number)[] | null;
  signal: Signal;
}
export interface Signal {
}
export interface LoginFormValues {
  username: string;
  password : string;
}
export interface initInputValues {
  userName: string | undefined;
  password: string| undefined;
  fullName: string | undefined;
  address: string | undefined;
  email: string | undefined;
  gender: string | undefined;
}