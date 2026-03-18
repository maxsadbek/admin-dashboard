import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import User from "./components/Dashboard/Users/users";
import Login from "./components/Login/Login";
import { userThemeState } from "./Store/themeStore";

const App = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isAuth, setIsAuth] = useState(false);

  const { darkMode } = userThemeState();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const auth = localStorage.getItem("isAuth");
    if (auth === "true") {
      setIsAuth(true);
    }
  }, []);

  if (!isAuth) {
    return <Login setIsAuth={setIsAuth} />;
  }

  return (
    <div className="flex min-h-dvh bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
      <Sidebar
        collapsed={sideBarCollapsed}
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
            {currentPage === "users" && <User />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
