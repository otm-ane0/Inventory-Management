
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InventoryValueChart } from "@/components/charts/InventoryValueChart";
import { StockMovementChart } from "@/components/charts/StockMovementChart";
import { SalesReportTable } from "@/components/reports/SalesReportTable";
import { StockAlertsTable } from "@/components/reports/StockAlertsTable";

const Reports = () => {
  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <div className="flex gap-2">
          <select className="px-2 py-1 border rounded-md text-sm">
            <option>Last 30 Days</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
            <option>Custom Range</option>
          </select>
          <select className="px-2 py-1 border rounded-md text-sm">
            <option>All Locations</option>
            <option>Warehouse A</option>
            <option>Warehouse B</option>
          </select>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Value</CardTitle>
                <CardDescription>Total value of inventory over time</CardDescription>
              </CardHeader>
              <CardContent>
                <InventoryValueChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stock Movement</CardTitle>
                <CardDescription>Incoming and outgoing inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <StockMovementChart />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Inventory Metrics</CardTitle>
              <CardDescription>Key inventory performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium">Stock Turnover</p>
                  <p className="text-2xl font-bold">4.7x</p>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium">Days on Hand</p>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-xs text-muted-foreground">Average per product</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium">Fill Rate</p>
                  <p className="text-2xl font-bold">96.4%</p>
                  <p className="text-xs text-muted-foreground">Order fulfillment</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium">Carrying Cost</p>
                  <p className="text-2xl font-bold">$45.2k</p>
                  <p className="text-xs text-muted-foreground">Monthly average</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Valuation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Detailed inventory valuation by category and location.</p>
              <div className="h-80 flex items-center justify-center bg-muted border rounded-md">
                <p className="text-muted-foreground">Inventory valuation report chart will appear here</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Stock Movement Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Analysis of stock movements over time.</p>
              <div className="h-80 flex items-center justify-center bg-muted border rounded-md">
                <p className="text-muted-foreground">Stock movement analysis will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Report</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <SalesReportTable />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Stock Alerts</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <StockAlertsTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Reports;
