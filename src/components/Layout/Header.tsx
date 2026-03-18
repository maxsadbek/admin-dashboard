import { useState } from "react";
import { ChevronDown, Logs, LogOut } from "lucide-react";
import UserImage from "../../assets/userImage.jpg";
interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
  setIsAuth: (val: boolean) => void;
}

const Header = ({ onToggleSidebar, setIsAuth }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
  };

  return (
    <header className="bg-white/50 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Logs className="w-5 h-5" />
          </button>
          <div className="hidden sm:block">
            <h1 className="text-xl font-black text-slate-800 dark:text-white leading-tight">
              Dashboard
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Welcome back, Maxsad
            </p>
          </div>
        </div>
        <div className="relative">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <img
              src={UserImage}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-transparent group-hover:ring-blue-500"
              alt="User"
            />
            <div className="hidden xl:block text-left">
              <p className="text-sm font-bold text-slate-700 dark:text-white">
                Maxsad B.
              </p>
              <p className="text-[10px] text-slate-500 uppercase">Admin</p>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-[-1]"
                onClick={() => setIsOpen(false)}
              ></div>

              <div className=" absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 animate-in fade-in zoom-in duration-200">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-1.5 text-sm text-blue-600 hover:bg-blue-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span className="font-medium">Log out</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
