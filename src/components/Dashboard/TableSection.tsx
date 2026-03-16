import { MoreHorizontal } from "lucide-react";

// 1. Ma'lumotlar bazasi (Mock Data)
const orders = [
  {
    id: "#ORD-7421",
    customer: "Alisher Navoiy",
    product: "MacBook Pro M3",
    amount: "$2,499",
    status: "Completed",
    date: "Mar 16, 2026",
  },
  {
    id: "#ORD-8532",
    customer: "Zuhra Karimova",
    product: "iPhone 15 Pro",
    amount: "$1,199",
    status: "Pending",
    date: "Mar 15, 2026",
  },
  {
    id: "#ORD-9104",
    customer: "Temur Malikov",
    product: "iPad Air",
    amount: "$599",
    status: "Cancelled",
    date: "Mar 14, 2026",
  },
  {
    id: "#ORD-2241",
    customer: "Sardor Rahmonov",
    product: "Apple Watch S9",
    amount: "$399",
    status: "Completed",
    date: "Mar 12, 2026",
  },
];

const getStatusStyles = (status) => {
  switch (status) {
    case "Completed":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400";
    case "Pending":
      return "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400";
    case "Cancelled":
      return "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400";
    default:
      return "bg-slate-100 text-slate-700 dark:bg-slate-500/10 dark:text-slate-400";
  }
};

const TableSection = () => {
  return (
    <div className="space-y-6 p-4">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest customer transactions
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
              View All
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200/60 dark:border-slate-700/50">
              <tr>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Order ID
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Customer
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Product
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Amount
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Status
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Date
                </th>
                <th className="p-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors group"
                >
                  <td className="p-4">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
                      {order.id}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-200">
                    {order.customer}
                  </td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-400">
                    {order.product}
                  </td>
                  <td className="p-4 text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {order.amount}
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {order.date}
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-500">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
