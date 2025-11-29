
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecentActivity } from "@/components/RecentActivity";
import { StockLevelChart } from "@/components/StockLevelChart";
import { ProductTable } from "@/components/ProductTable";
import { MainLayout } from "@/components/layout/MainLayout";
import { ArrowDownIcon, ArrowUpIcon, BarChart3Icon, PackageIcon, AlertCircleIcon } from "lucide-react";

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalProducts: 0,
    lowStockItems: 0,
    totalValue: 0,
    incomingStock: 0,
  });

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setMetrics({
        totalProducts: 2462,
        lowStockItems: 36,
        totalValue: 5214980,
        incomingStock: 542,
      });
    }, 500);
  }, []);

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex gap-2">
          <select className="px-2 py-1 border rounded-md text-sm">
            <option>All Locations</option>
            <option>Warehouse A</option>
            <option>Warehouse B</option>
          </select>
          <select className="px-2 py-1 border rounded-md text-sm">
            <option>Last 30 Days</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <PackageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalProducts.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +180 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <AlertCircleIcon className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.lowStockItems}</div>
            <div className="flex items-center pt-1">
              <Progress value={36} max={100} className="h-2" />
              <span className="text-xs text-muted-foreground ml-2">3.6%</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Inventory Value</CardTitle>
            <BarChart3Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(metrics.totalValue / 1000).toFixed(1)}k
            </div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpIcon className="h-3 w-3 mr-1 text-emerald-500" />
              <span className="text-emerald-500 font-medium">8.2%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Incoming Stock</CardTitle>
            <ArrowDownIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.incomingStock}</div>
            <p className="text-xs text-muted-foreground">
              36 shipments expected this week
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Stock Levels</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <StockLevelChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <ProductTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Stock Movement History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Detailed stock movement history will be available here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Dashboard;
