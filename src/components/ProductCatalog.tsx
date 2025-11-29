
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/data/mockData";
import { Edit, MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface ProductCatalogProps {
  searchQuery?: string;
}

export function ProductCatalog({ searchQuery = "" }: ProductCatalogProps) {
  // Filter products based on search query
  const filteredProducts = mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStockStatusBadge = (inStock: number, lowThreshold: number) => {
    if (inStock <= 0) {
      return <Badge variant="destructive">Out of Stock</Badge>;
    } else if (inStock <= lowThreshold) {
      return <Badge variant="warning">Low Stock</Badge>;
    } else {
      return <Badge variant="outline">In Stock</Badge>;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="h-40 bg-muted flex items-center justify-center">
              <div className="text-4xl font-light text-muted-foreground">
                {product.name.substring(0, 2).toUpperCase()}
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.sku}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Edit product</DropdownMenuItem>
                    <DropdownMenuItem>Adjust stock</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="secondary">{product.category}</Badge>
                {getStockStatusBadge(product.inStock, 10)}
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Price</p>
                  <p className="font-medium">${product.unitPrice.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">In Stock</p>
                  <p className="font-medium">{product.inStock}</p>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="mt-4 w-full">
                <Edit className="h-3.5 w-3.5 mr-2" />
                Edit Product
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-12">
          <p className="text-muted-foreground">No products match your search criteria.</p>
        </div>
      )}
    </div>
  );
}
