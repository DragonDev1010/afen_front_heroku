import React from "react";
import { BaseComponent } from "../../../types/BaseComponent";

interface FlexProps extends BaseComponent {
  spaceBetween?: boolean;
  start?: boolean;
  wrap?: boolean;
}

export default function Flex({
  children,
  style,
  spaceBetween,
  start,
  wrap,
}: FlexProps) {
  return (
    <div
      className={`flex overflow-auto w-full ${
        start ? "items-start" : "items-end"
      }
      ${wrap && "flex-wrap md:flex-nowrap"}
      ${spaceBetween && "justify-between"} ${style}`}
    >
      {children}
    </div>
  );
}
