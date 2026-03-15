import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";

const App = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="flex min-h-dvh bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <Sidebar
        collapsed={sideBarCollapsed}
        onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      <div className="flex flex-1 flex-col min-w-0">
        <Header
          sidebarCollapsed={sideBarCollapsed}
          onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-w-[1600px]">
            {currentPage === "dashboard" && <Dashboard />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App
