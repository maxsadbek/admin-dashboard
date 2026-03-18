import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  Eye,
  ShoppingCart,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: <DollarSign className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
    progress: "w-[85%]",
  },
  {
    title: "Active Users",
    value: "8,549",
    change: "+8.2%",
    trend: "up",
    icon: <Users className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
    progress: "w-[65%]",
  },
  {
    title: "Total Orders",
    value: "2,847",
    change: "-3.1%",
    trend: "down",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
    progress: "w-[45%]",
  },
  {
    title: "Total Sales",
    value: "45,231",
    change: "+15.3%",
    trend: "up",
    icon: <Eye className="w-6 h-6" />,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
    progress: "w-[92%]",
  },
];

const StatusGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.title}
              </p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {stat.value}
              </h3>
            </div>
            <div
              className={`p-3 rounded-xl ${stat.bgColor} ${stat.textColor} group-hover:scale-110 transition-transform duration-300`}
            >
              {stat.icon}
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <div
              className={`flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${
                stat.trend === "up"
                  ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30"
                  : "bg-red-100 text-red-600 dark:bg-red-900/30"
              }`}
            >
              {stat.trend === "up" ? (
                <ArrowUpRight className="w-3 h-3 mr-1" />
              ) : (
                <ArrowDownRight className="w-3 h-3 mr-1" />
              )}
              {stat.change}
            </div>
            <span className="text-xs text-slate-400 dark:text-slate-500">
              vs last month
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full ${stat.progress} bg-blue-500 transition-all duration-1000`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusGrid;
