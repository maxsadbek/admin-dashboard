import {
  Triangle,
  LayoutDashboard,
  BarChart,
  Users,
  ShoppingBag,
  Package,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  ChevronDown,
} from "lucide-react";
import UserImage from "../../assets/userImage.jpg";
import { useState } from "react";

const menuItem = [
  {
    id: "dashboard",
    icon: <LayoutDashboard />,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: <BarChart />,
    label: "Analytics",
    subMenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: <Users />,
    label: "Users",
    count: "2.4k",
    subMenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: <ShoppingBag />,
    label: "E-commerce",
    subMenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: <Package />,
    label: "inventory",
    count: "847",
  },
  {
    id: "transactions",
    icon: <MessageSquare />,
    label: "Messages",
    badge: "12",
  },
  {
    id: "calendar",
    icon: <Calendar />,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: <FileText />,
    label: "Reports",
  },
  {
    id: "settings",
    icon: <Settings />,
    label: "Settings",
  },
];

type SidebarProps = {
  collapsed: boolean;
  onToggle?: () => void;
  currentPage: string;
  onPaheChange: (page: string) => void;
};

const Sidebar = ({
  collapsed,
  onToggle,
  currentPage,
  onPaheChange,
}: SidebarProps) => {
  const [expandedItems, setExpandedItem] = useState(new Set(["analytics"]));

  const toggleExpanded = (itemID) => {
    const newExpanded = new Set(expandedItems);

    if (newExpanded.has(itemID)) {
      newExpanded.delete(itemID);
    } else {
      newExpanded.add(itemID);
    }
    setExpandedItem(newExpanded);
  };

  return (
    <div
      className={`${collapsed ? "w-20" : "w-72"}
     transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10
    `}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 ">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Triangle className="w-6 h-6 text-white" />
          </div>
          {/* Conditional Rendering */}
          {!collapsed && (
            <div className="">
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Vertex
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto p-2">
        {menuItem.map((item) => {
          return (
            <div className="" key={item.id}>
              <button
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${currentPage === item.id || item.active ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"}`}
                onClick={() => {
                  if (item.subMenu) {
                    toggleExpanded(item.id);
                  } else {
                    onPaheChange(item.id);
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  <span className="dark:text-slate-200 w-5 h-5">
                    {item.icon}
                  </span>
                    {!collapsed && (
                        <>
                      <span className="font-medium ml-2 dark:text-slate-300">
                        {item.label}
                      </span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.count && (
                      <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                        {item.count}
                      </span>
                    )}
                    </>
                   )}
                </div>

                {!collapsed && item.subMenu && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform dark:text-slate-400 `}
                  />
                )}
              </button>

              {/* Sub Menu */}
              {!collapsed && item.subMenu && expandedItems.has(item.id) && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.subMenu.map((subitem) => {
                    return (
                      <button
                        key={subitem.id}
                        className="w-full text-left p-2 text-slate-600 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                      >
                        {subitem.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Profile */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img
              src={UserImage}
              alt="user image"
              className="w-10 h-10 rounded-full ring-blue-500"
            />
            <div className="flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                  Maxsadbek Baxtiyorov
                </p>
                <p className="text-xs text-slate-500 truncate">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
