import { HTMLAttributes, SVGAttributes } from "react";

export interface WithClassname
  extends Pick<HTMLAttributes<HTMLElement>, "className"> {}

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
}

export type Rate = {
  vtype: string;
  mileage: string;
  rtype: string;
};

export interface Pills {
  noOfPages: any;
  currentPage: any;
  onPageChange?: any;
  previousPage: any;
  nextPage: any;
  goToPage: any;
  isManual?: any;
}
export type Vehicle = {
  id: number;
  license_no: string;
  color: string;
  make: string;
  model: string;
  status: string;
  vehicle_type: string;
  vin: string;
  fuel_type: string;
};

export type Reservations = {
  id: number;
  reservationNo: number;
  type: string;
  name: string;
  phone: string;
  checkout: string;
  checkin: string;
  created: string;
  status: string;
  reservationType: string;
};

export type VehicleDetails = {
  id: number;
  type: string;
  damagedDate: string;
  desc: string;
  documentName: string;
  documentType: string;
  fileSize: string;
  contentType: string;
  expenseType: string;
  expenseAmount: string;
  payee: string;
  expenseDate: string;
  mileage: string;
  note: string;
  maintenanceName: string;
  maintenanceAmount: string;
  maintenanceStatus: string;
  serviceDate: string;
  intervalMonths: string;
  nextServiceDate: string;
  lastServiceDate: string;
  intervalMileage: string;
  employeeName: string;
  agreementNo: string;
  purpose: string;
  pickupTime: string;
  dropupTime: string;
  odometerOut: string;
  odometerIn: string;
  fuelOut: string;
  fuelIn: string;
  customerName: string;
  todoName: string;
  todoDate: string;
  vehicleNo: string;
  priority: string;
  assignedto: string;
  todoNote: string;
  status: string;
};
