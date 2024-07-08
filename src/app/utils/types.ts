import { HTMLAttributes, SVGAttributes } from "react";
import Customers from "@/components/icons/Customers";

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

export type Customer = {
  id: number;
  licenseNo: string;
  customerName: string;
  customeID: string;
  email: string;
  status: string;
  phone: string;
  licenseExp: string;
  address: string;
};

export type Driver = {
  id: number;
  licenseNo: string;
  full_name: string;
  issue_date: string;
  status: string;
  phone: string;
  exp_date: string;
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
  paymentID: string;
  paymentType: string;
  paymentAmt: string;
  paymentMethod: string;
  paymentDate: string;
  paymentDesc: string;
  createdBy: string;
  // invoiceID: string;
  // invoiceAmt: string;
  // iAmtPaid: string;
  // outstanding: string;
  // billTo: string;
  // paymentTo: string;
  // invoiceDate: string;
  // iCreatedBy: string;
};
