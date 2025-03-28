import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useUserProfile } from "../hooks/useUserProfile";

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  const { userProfile, loading, error } = useUserProfile();
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar userProfile={userProfile} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden bg-white">
        <Topbar userProfile={userProfile} />
        <main className="p-6 h-screen overflow-scroll">{children}</main>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
