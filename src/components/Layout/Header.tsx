import {
  Bell,
  ChevronDown,
  Logs,
  Sun,
} from "lucide-react";
import UserImage from "../../assets/userImage.jpg";

type HeaderProps = {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
};

const Header = ({ onToggleSidebar}: HeaderProps) => {
  return (
    <header className="bg-white/50 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between gap-4">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={onToggleSidebar}
          >
            <Logs className="w-5 h-5" />
          </button>

          <div className="hidden sm:block">
            <h1 className="text-xl font-black text-slate-800 dark:text-white leading-tight">
              Dashboard
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
              Welcome back, Maxsad
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Action Buttons */}
          <div className="flex items-center border-r border-slate-200 dark:border-slate-700 pr-2 sm:pr-3 space-x-1">
            <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Sun className="w-5 h-5" />
            </button>

            <button className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <img
                src={UserImage}
                alt="User"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-transparent group-hover:ring-blue-500 transition-all"
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
            </div>
            <div className="hidden xl:block">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-none">
                Maxsad B.
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-500 font-medium uppercase mt-1">
                Admin
              </p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
