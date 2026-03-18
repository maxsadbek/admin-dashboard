import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { userThemeState } from "../../Store/themeStore";

const RevneuseChart = () => {
  const { darkMode } = userThemeState();

  const data = [
    { month: "Jan", revenue: 45000, expenses: 32000 },
    { month: "Feb", revenue: 52000, expenses: 38000 },
    { month: "Mar", revenue: 48000, expenses: 35000 },
    { month: "Apr", revenue: 61000, expenses: 42000 },
    { month: "May", revenue: 55000, expenses: 40000 },
    { month: "Jun", revenue: 67000, expenses: 45000 },
    { month: "Jul", revenue: 72000, expenses: 48000 },
    { month: "Aug", revenue: 69000, expenses: 46000 },
    { month: "Sep", revenue: 78000, expenses: 52000 },
    { month: "Oct", revenue: 74000, expenses: 50000 },
    { month: "Nov", revenue: 82000, expenses: 55000 },
    { month: "Dec", revenue: 89000, expenses: 58000 },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Revenue Overview
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Monthly statistics
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={darkMode ? "#1e293b" : "#e2e8f0"}
            />
            <XAxis
              dataKey="month"
              stroke={darkMode ? "#94a3b8" : "#64748b"}
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke={darkMode ? "#94a3b8" : "#64748b"}
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              cursor={{ fill: darkMode ? "#1e293b" : "#f1f5f9", opacity: 0.4 }}
              contentStyle={{
                backgroundColor: darkMode ? "#0f172a" : "#ffffff",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                color: darkMode ? "#f8fafc" : "#1e293b",
              }}
              itemStyle={{ fontSize: "12px", fontWeight: "600" }}
            />
            <Bar
              dataKey="revenue"
              fill="url(#revenueGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            <Bar
              dataKey="expenses"
              fill="url(#expensesGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevneuseChart;
