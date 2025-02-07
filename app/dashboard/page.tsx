import Sidebar from "@/app/components/Sidebar/Sidebar";
import Topbar from "@/app/components/Topbar/Topbar";
import DashboardContent from "@/app/components/DashboardContent/DashboardContent";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Topbar />
        <DashboardContent />
      </div>
    </div>
  );
}
