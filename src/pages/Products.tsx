
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, SearchIcon } from "lucide-react";
import { AddProductDialog } from "@/components/AddProductDialog";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
        <Button onClick={() => setDialogOpen(true)}>
          <PlusIcon className="h-4 w-4 mr-2" /> Add Product
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <div className="flex gap-2">
          <select className="px-2 py-1 border rounded-md text-sm">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Furniture</option>
          </select>
          <select className="px-2 py-1 border rounded-md text-sm">
            <option>All Locations</option>
            <option>Warehouse A</option>
            <option>Warehouse B</option>
          </select>
          <select className="px-2 py-1 border rounded-md text-sm">
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>

      <ProductCatalog searchQuery={searchQuery} />
      <AddProductDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </MainLayout>
  );
};

export default Products;
