import type React from "react";
import { KonstaProvider } from "konsta/react";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return <KonstaProvider theme="parent">{children}</KonstaProvider>;
}
