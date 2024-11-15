import { LayoutDashboard } from "lucide-react";

const AppSidebar: React.FC = () => {
    return (
     <div className="z-10 fixed top-0 left-0 w-[250px] h-full bg-white shadow-custom-card">
        <div className="flex items-center px-lsm h-[60px] border-b border-b-[#EEEEEE] font-bold">
            Survey
        </div>
        <ul>
          <li className="flex items-center px-lsm py-lsm border-b border-[#EEEEEE]">
              <LayoutDashboard size={14} />
              <div className="text-[14px] ml-[7px]">Dashboard</div>
          </li>
        </ul>
     </div>
    )
}
  

export default AppSidebar;