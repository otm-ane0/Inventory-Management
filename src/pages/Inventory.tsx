
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InventoryTable } from "@/components/InventoryTable";
import { Badge } from "@/components/ui/badge";
import { SearchIcon, FilterIcon, ScanIcon } from "lucide-react";

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Inventory</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <FilterIcon className="h-4 w-4 mr-2" /> Filter
          </Button>
          <Button variant="outline">
            <ScanIcon className="h-4 w-4 mr-2" /> Scan
          </Button>
          <Button>Adjust Stock</Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search inventory by product name, SKU, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="low-stock">
            Low Stock <Badge variant="destructive" className="ml-2">36</Badge>
          </TabsTrigger>
          <TabsTrigger value="expiring">
            Expiring Soon <Badge className="ml-2">12</Badge>
          </TabsTrigger>
          <TabsTrigger value="batches">Batches/Lots</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>All Inventory</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <InventoryTable searchQuery={searchQuery} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="low-stock" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Low Stock Items</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <InventoryTable filter="low-stock" searchQuery={searchQuery} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="expiring" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Expiring Soon</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <InventoryTable filter="expiring" searchQuery={searchQuery} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="batches" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Batch/Lot Tracking</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <InventoryTable filter="batches" searchQuery={searchQuery} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Inventory;
