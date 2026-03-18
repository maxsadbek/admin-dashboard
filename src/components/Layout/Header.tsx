import {  ChevronDown, Logs } from "lucide-react";
import UserImage from "../../assets/userImage.jpg";

const Header = ({ onToggleSidebar }: { onToggleSidebar: () => void; sidebarCollapsed: boolean }) => {

  return (
    <header className="bg-white/50 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <button onClick={onToggleSidebar} className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
            <Logs className="w-5 h-5" />
          </button>
          <div className="hidden sm:block">
            <h1 className="text-xl font-black text-slate-800 dark:text-white leading-tight">Dashboard</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Welcome back, Maxsad</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-3 cursor-pointer group">
            <img src={UserImage} className="w-9 h-9 rounded-full object-cover ring-2 ring-transparent group-hover:ring-blue-500" alt="User" />
            <div className="hidden xl:block text-left">
              <p className="text-sm font-bold text-slate-700 dark:text-white">Maxsad B.</p>
              <p className="text-[10px] text-slate-500 uppercase">Admin</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
