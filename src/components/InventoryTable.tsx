
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { mockInventory } from "@/data/mockData";

interface InventoryTableProps {
  searchQuery?: string;
  filter?: "low-stock" | "expiring" | "batches" | string;
}

export function InventoryTable({ searchQuery = "", filter = "" }: InventoryTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  // Filter the inventory based on search query and filter
  const filteredInventory = mockInventory.filter((item) => {
    // Apply search filter
    const searchMatches = !searchQuery || 
      item.product.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply category filter
    let categoryMatches = true;
    if (filter === "low-stock") {
      categoryMatches = item.quantity < item.reorderPoint;
    } else if (filter === "expiring") {
      // Check if expiration date is within 30 days
      const expiryDate = new Date(item.expiryDate || "");
      const thirtyDaysFromNow = new Date();
      thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
      categoryMatches = item.expiryDate && expiryDate <= thirtyDaysFromNow;
    } else if (filter === "batches") {
      categoryMatches = !!item.batchNumber;
    }
    
    return searchMatches && categoryMatches;
  });
  
  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredInventory.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Reorder Point</TableHead>
            {filter === "batches" && <TableHead>Batch/Lot</TableHead>}
            {(filter === "batches" || filter === "expiring") && <TableHead>Expiry Date</TableHead>}
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.product}</TableCell>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {item.quantity}
                    {item.quantity < item.reorderPoint && (
                      <Badge variant="destructive" className="ml-2">Low</Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>{item.reorderPoint}</TableCell>
                {filter === "batches" && <TableCell>{item.batchNumber || "—"}</TableCell>}
                {(filter === "batches" || filter === "expiring") && (
                  <TableCell>{item.expiryDate || "—"}</TableCell>
                )}
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Adjust stock</DropdownMenuItem>
                      <DropdownMenuItem>Move location</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={filter === "batches" ? 8 : 7} className="h-24 text-center">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      
      {filteredInventory.length > 0 && (
        <div className="flex items-center justify-between px-2 py-4">
          <div className="text-sm text-muted-foreground">
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredInventory.length)} of {filteredInventory.length} items
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <div className="text-sm">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
