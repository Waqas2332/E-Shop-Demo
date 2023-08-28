import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-100 min-h-screen justify-center items-center">
      {children}
    </div>
  );
}

export default Layout;
