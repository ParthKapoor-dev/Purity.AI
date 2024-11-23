import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProviders";
import { Toaster } from "@/components/ui/toaster";

export default function Providers({children} : Readonly<{children : ReactNode}>) {
  return (
    <ThemeProvider  attribute="class" defaultTheme="light" forcedTheme="light">
      {children}
      <Toaster/>
    </ThemeProvider>
  )
}