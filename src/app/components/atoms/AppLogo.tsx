//@ts-nocheck
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WithClassname } from "@/utils/types";

interface Props extends WithClassname {
  path?: string;
}

const AppLogo = ({ path = "/", className = "" }: Props) => {
  return (
    <Link className={`${className} object-contain object-center`} href={path}>
      <Image
        src="/images/logo.png"
        alt="Carent Logo"
        width={117}
        height={24}
        priority
      />
      <span className="sr-only">Link to home page</span>
    </Link>
  );
};

export { AppLogo };
