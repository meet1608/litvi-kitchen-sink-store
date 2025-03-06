
import { Card } from "@/components/ui/card";
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package, 
  TrendingUp, 
  TrendingDown
} from "lucide-react";

// Mock data for the dashboard
const statsData = [
  { 
    title: "Total Sales", 
    value: "$12,345", 
    change: "+12.5%", 
    trend: "up", 
    icon: DollarSign 
  },
  { 
    title: "Orders", 
    value: "234", 
    change: "+8.2%", 
    trend: "up", 
    icon: ShoppingCart 
  },
  { 
    title: "Customers", 
    value: "1,234", 
    change: "+15.3%", 
    trend: "up", 
    icon: Users 
  },
  { 
    title: "Products", 
    value: "45", 
    change: "-2.4%", 
    trend: "down", 
    icon: Package 
  },
];

// Recent orders mock data
const recentOrders = [
  { id: "#ORD-001", customer: "John Doe", date: "2023-06-01", amount: "$299.99", status: "Completed" },
  { id: "#ORD-002", customer: "Jane Smith", date: "2023-06-02", amount: "$149.99", status: "Processing" },
  { id: "#ORD-003", customer: "Mike Johnson", date: "2023-06-03", amount: "$449.99", status: "Completed" },
  { id: "#ORD-004", customer: "Anna Brown", date: "2023-06-04", amount: "$349.99", status: "Shipped" },
  { id: "#ORD-005", customer: "Robert Wilson", date: "2023-06-05", amount: "$199.99", status: "Processing" },
];

// Top selling products mock data
const topProducts = [
  { id: 1, name: "Metallic Brown", category: "Metallic Series", sales: 124, revenue: "$37,198" },
  { id: 5, name: "Ivory Sand", category: "Granite Series", sales: 98, revenue: "$35,277" },
  { id: 2, name: "Metallic Black", category: "Metallic Series", sales: 87, revenue: "$30,449" },
  { id: 6, name: "Red Rose", category: "Granite Series", sales: 65, revenue: "$25,999" },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <div className="flex items-center mt-2">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className="bg-litvi-purple/10 p-3 rounded-full">
                <stat.icon className="h-6 w-6 text-litvi-purple" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Recent Orders */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-blue-100 text-blue-800'}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      
      {/* Top Selling Products */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Units Sold
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {product.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {product.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;
