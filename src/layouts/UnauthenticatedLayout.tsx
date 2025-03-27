import { ReactNode } from "react";

interface UnauthenticatedLayoutProps {
  children: ReactNode;
}

const UnauthenticatedLayout = ({ children }: UnauthenticatedLayoutProps) => {
  return <div className="flex justify-center items-center h-screen bg-gray-100">{children}</div>;
};

export default UnauthenticatedLayout;
