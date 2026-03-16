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
import { motion, AnimatePresence } from "framer-motion";

/**
 * Menyu elementlari strukturasi
 * Har bir element id, icon va label'ga ega.
 * subMenu mavjud bo'lsa, u pastki menyu sifatida ochiladi.
 */
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
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: <Users size={20} />,
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
    icon: <ShoppingBag size={20} />,
    label: "E-commerce",
    subMenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: <Package size={20} />,
    label: "Inventory",
    count: "847",
  },
  {
    id: "messages",
    icon: <MessageSquare size={20} />,
    label: "Messages",
    badge: "12",
  },
  {
    id: "calendar",
    icon: <Calendar size={20} />,
    label: "Calendar",
  },
  {
    id: "reports_main",
    icon: <FileText size={20} />,
    label: "Reports",
  },
  {
    id: "settings",
    icon: <Settings size={20} />,
    label: "Settings",
  },
];

/**
 * Framer Motion animatsiyalari: Sub-menyu ochilib yopilishi uchun
 */
const subMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

type SidebarProps = {
  collapsed: boolean;
  onToggle?: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
};

const Sidebar = ({ collapsed, currentPage, onPageChange }: SidebarProps) => {
  const [expandedItems, setExpandedItem] = useState(new Set(["analytics"]));
  const toggleExpanded = (itemID: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemID)) {
      newExpanded.delete(itemID);
    } else {
      newExpanded.add(itemID);
    }
    setExpandedItem(newExpanded);
  };

  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-68"}
        /* h-screen o'rniga min-h-dvh ishlatamiz, sticky orqali joyida qotiramiz */
        transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80
        backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50
        flex flex-col relative z-20 min-h-dvh sticky top-0
      `}
    >
      {/* 1. LOGO QISMI */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 ">
        <div className="flex items-center space-x-3">
          <div className="min-w-[40px] h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Triangle className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="overflow-hidden whitespace-nowrap"
            >
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Vertex
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* 2. NAVIGATSIYA (MENU) */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-3 custom-scrollbar">
        {menuItem.map((item) => {
          const isExpanded = expandedItems.has(item.id);
          const isActive = currentPage === item.id;

          return (
            <div className="mb-1" key={item.id}>
              <button
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
                onClick={() => {
                  if (item.subMenu) {
                    toggleExpanded(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  <span
                    className={`${isActive ? "text-white" : "text-slate-500 dark:text-slate-400"}`}
                  >
                    {item.icon}
                  </span>
                  {!collapsed && (
                    <span className="font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </div>

                {!collapsed && (
                  <div className="flex items-center space-x-2">
                    {item.badge && (
                      <span className="px-2 py-0.5 text-[10px] bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.count && (
                      <span className="px-2 py-0.5 text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                        {item.count}
                      </span>
                    )}
                    {item.subMenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>
                )}
              </button>

              {/* 3. SUB-MENU ANIMATSIYASI */}
              <AnimatePresence>
                {!collapsed && item.subMenu && isExpanded && (
                  <motion.div
                    key="content"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={subMenuVariants}
                    className="overflow-hidden"
                  >
                    <div className="ml-9 mt-1 space-y-1 border-l-2 border-slate-100 dark:border-slate-800 pl-4">
                      {item.subMenu.map((subitem) => (
                        <button
                          key={subitem.id}
                          onClick={() => onPageChange(subitem.id)}
                          className={`w-full text-left p-2 text-sm rounded-lg transition-all
                            ${
                              currentPage === subitem.id
                                ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50/50 dark:bg-blue-900/20"
                                : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                            }`}
                        >
                          {subitem.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* 4. FOYDALANUVCHI PROFILI (PASTKI QISM) */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/50">
        <div
          className={`flex items-center ${collapsed ? "justify-center" : "space-x-3"} p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50`}
        >
          <img
            src={UserImage}
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500/20 object-cover"
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                Maxsadbek B.
              </p>
              <p className="text-xs text-slate-500 truncate text-ellipsis overflow-hidden">
                Administrator
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
