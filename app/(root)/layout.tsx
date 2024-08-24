import { ContactButton } from "@/components/index";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-dvh w-dvw max-h-screen max-w-7xl flex flex-col items-center justify-center overflow-hidden mx-auto">
      <ContactButton />
      {children}
    </main>
  );
};

export default Layout;
