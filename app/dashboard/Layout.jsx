import Sidebar from "@/app/components/Sidebar/Sidebar";
import Topbar from "@/app/components/Topbar/Topbar";

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100 ">
            <Sidebar />
            <div className="flex  overflow-x-hidden overflow-y-auto w-full flex-col flex-grow">
                <Topbar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
