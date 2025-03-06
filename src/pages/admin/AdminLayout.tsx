
import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  Menu,
  X,
  LogOut
} from "lucide-react";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    // In a real app, this would clear auth state
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-litvi-darkCharcoal text-white transition-all duration-300 ease-in-out flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold">LITVI Admin</h1>
          ) : (
            <span className="text-xl font-bold mx-auto">L</span>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-white hover:bg-white/10"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        <nav className="flex-1 py-4">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 hover:bg-white/10 transition-colors ${
                    isActive ? "bg-litvi-purple text-white" : "text-gray-300"
                  }`
                }
              >
                <LayoutDashboard className="h-5 w-5" />
                {sidebarOpen && <span className="ml-3">Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/products"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 hover:bg-white/10 transition-colors ${
                    isActive ? "bg-litvi-purple text-white" : "text-gray-300"
                  }`
                }
              >
                <Package className="h-5 w-5" />
                {sidebarOpen && <span className="ml-3">Products</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/orders"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 hover:bg-white/10 transition-colors ${
                    isActive ? "bg-litvi-purple text-white" : "text-gray-300"
                  }`
                }
              >
                <ShoppingCart className="h-5 w-5" />
                {sidebarOpen && <span className="ml-3">Orders</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/customers"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 hover:bg-white/10 transition-colors ${
                    isActive ? "bg-litvi-purple text-white" : "text-gray-300"
                  }`
                }
              >
                <Users className="h-5 w-5" />
                {sidebarOpen && <span className="ml-3">Customers</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/settings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 hover:bg-white/10 transition-colors ${
                    isActive ? "bg-litvi-purple text-white" : "text-gray-300"
                  }`
                }
              >
                <Settings className="h-5 w-5" />
                {sidebarOpen && <span className="ml-3">Settings</span>}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full flex items-center justify-center text-white hover:bg-white/10"
          >
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Admin Portal</h2>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
