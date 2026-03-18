import {
  MoreHorizontal,
  Search,
  UserPlus,
  Mail,
  ShieldCheck,
  Calendar,
} from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
  joinedDate: string;
}

const usersData: User[] = [
  {
    id: 1,
    name: "Davlat Murodov",
    email: "davlatmurodov@gmail.com",
    role: "Admin",
    status: "Active",
    joinedDate: "Jan 12, 2026",
  },
  {
    id: 2,
    name: "Ali Valiyev",
    email: "ali.valiyev@mail.com",
    role: "Editor",
    status: "Active",
    joinedDate: "Feb 05, 2026",
  },
  {
    id: 3,
    name: "Sardor Karimov",
    email: "sardor_karimov@gmail.com",
    role: "User",
    status: "Inactive",
    joinedDate: "Mar 10, 2026",
  },
  {
    id: 4,
    name: "Jasmina Raximova",
    email: "jasmina.raximova@mail.com",
    role: "User",
    status: "Active",
    joinedDate: "Jan 22, 2026",
  },
  {
    id: 5,
    name: "Bekzod Tursunov",
    email: "bekzod_tursunov@gmail.com",
    role: "Admin",
    status: "Active",
    joinedDate: "Mar 01, 2026",
  },
  {
    id: 6,
    name: "Madina Islomova",
    email: "madina.islomova@mail.com",
    role: "Editor",
    status: "Active",
    joinedDate: "Feb 15, 2026",
  },
  {
    id: 7,
    name: "Azizbek Qodirov",
    email: "azizbek.qodirov@gmail.com",
    role: "User",
    status: "Inactive",
    joinedDate: "Mar 16, 2026",
  },
  {
    id: 8,
    name: "Shahzoda Yo‘ldosheva",
    email: "shahzoda.y@mail.com",
    role: "User",
    status: "Active",
    joinedDate: "Jan 30, 2026",
  },
  {
    id: 9,
    name: "Diyorbek Xasanov",
    email: "diyorbekxasanov@gmail.com",
    role: "Admin",
    status: "Active",
    joinedDate: "Feb 28, 2026",
  },
  {
    id: 10,
    name: "Umidjon Rasulov",
    email: "umidjon.rasulov@mail.com",
    role: "User",
    status: "Active",
    joinedDate: "Mar 05, 2026",
  },
];

const Users = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            Foydalanuvchilar
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Tizimdagi barcha foydalanuvchilarni boshqarish
          </p>
        </div>
        <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-all shadow-lg shadow-blue-500/25">
          <UserPlus className="w-4 h-4" />
          <span>Add user</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden shadow-sm">
        {/* Table Filters/Search */}
        <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Qidirish..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white"
            />
          </div>
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200/60 dark:border-slate-700/50">
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  User
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Role
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Status
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Date
                </th>
                {/* <th className="p-4 w-10"></th> */}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
              {usersData.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors group"
                >
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          {user.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
                          <Mail className="w-3 h-3 mr-1" /> {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <ShieldCheck className="w-4 h-4 mr-2 text-blue-500" />
                      {user.role}
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${user.status === "Active" ? "bg-emerald-500" : "bg-slate-400"}`}
                      ></span>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5 mr-2" />
                      {user.joinedDate}
                    </div>
                  </td>
                  {/* <td className="p-4 text-right">
                    <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-500">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
