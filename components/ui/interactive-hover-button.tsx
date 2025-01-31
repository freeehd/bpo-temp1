/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full  bg-white/10 backdrop-filter backdrop-blur-3xl - p-2 px-6 text-center font-semibold dark:border-neutral-800 dark:bg-neutral-950",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-white/75 backdrop-filter backdrop-blur-3xl transition-all duration-300 group-hover:scale-[100.8] dark:bg-neutral-50"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-gray-900 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 dark:text-neutral-900">
        <span>{children}</span>
        <ArrowRight />
      </div>
      
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
