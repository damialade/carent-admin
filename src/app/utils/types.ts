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
