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
