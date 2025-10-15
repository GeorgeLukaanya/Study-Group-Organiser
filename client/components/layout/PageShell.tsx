import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

import { AppNavigation } from "./AppNavigation";

export interface PageShellProps extends PropsWithChildren {
  showNavigation?: boolean;
  mainClassName?: string;
}

export function PageShell({
  children,
  showNavigation = true,
  mainClassName,
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {showNavigation ? <AppNavigation /> : null}
      <main
        className={cn(
          "mx-auto w-full max-w-5xl px-6 py-12 sm:px-12",
          mainClassName,
        )}
      >
        {children}
      </main>
    </div>
  );
}
