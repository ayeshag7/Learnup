import React from "react";
import { cn } from "../lib/utils";

export default function SectionHeader({ label, className, isProductSection }) {
  return (
    <span
      className={cn(
        "before:block before:absolute before:-inset-1 before:-skew-y-1 relative inline-block",
        isProductSection ? "before:bg-white/30" : "before:bg-primary-200/50"
      )}
    >
      <span
        className={cn(
          "text-primary-400 italic relative font-heading-semibold text-lg md:text-2xl lg:text-3xl",
          className
        )}
      >
        {label}
      </span>
    </span>
  );
}
