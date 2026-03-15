const TableSection = () => {
  return (
    <div className="space-y-6">
      {/* Recent Order */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 ">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Recent Orders
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Latest cutomer orders
            </p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
