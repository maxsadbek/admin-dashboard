import {
  Triangle,
  LayoutDashboard,
  BarChart,
  Users,
  MessageSquare,
  Settings,
} from "lucide-react";
import UserImage from "../../assets/userImage.jpg";

const menuItem = [
  {
    id: "dashboard",
    icon: <LayoutDashboard size={20} />,
    label: "Dashboard",
    badge: "New",
  },
  {
    id: "analytics",
    icon: <BarChart size={20} />,
    label: "Analytics",
    subMenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
    ],
  },
  { id: "users", icon: <Users size={20} />, label: "Users", count: "2.4k" },
  {
    id: "messages",
    icon: <MessageSquare size={20} />,
    label: "Messages",
    badge: "12",
  },
  { id: "settings", icon: <Settings size={20} />, label: "Settings" },
];

const Sidebar = ({ collapsed, currentPage, onPageChange }: any) => {
  return (
    <aside
      className={`${collapsed ? "w-20" : "w-64"} transition-all duration-500 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border-r border-slate-200/50 dark:border-slate-800/50 flex flex-col sticky top-0 h-screen z-50`}
    >
      <div className="p-6 mb-4">
        <div className="flex items-center space-x-3 text-blue-600">
          <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30">
            <Triangle className="w-6 h-6 text-white fill-current" />
          </div>
          {!collapsed && (
            <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
              Nexus UI
            </span>
          )}
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {menuItem.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 group ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/50"
              }`}
            >
              <div className="flex items-center space-x-3">
                <span
                  className={
                    isActive ? "text-white" : "group-hover:text-blue-500"
                  }
                >
                  {item.icon}
                </span>
                {!collapsed && (
                  <span className="font-medium text-sm">{item.label}</span>
                )}
              </div>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200/50 dark:border-slate-800/50">
        <div
          className={`flex items-center ${collapsed ? "justify-center" : "space-x-3"} p-2 rounded-2xl bg-slate-100/50 dark:bg-slate-800/40`}
        >
          <img
            src={UserImage}
            className="w-10 h-10 rounded-xl object-cover ring-2 ring-white dark:ring-slate-700"
            alt="User"
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-800 dark:text-white truncate">
                Maxsad
              </p>
              <p className="text-xs text-slate-500 truncate">Pro Plan</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
