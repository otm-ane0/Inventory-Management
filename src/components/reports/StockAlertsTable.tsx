
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockStockAlerts } from "@/data/mockData";

export function StockAlertsTable() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Current Stock</TableHead>
            <TableHead>Reorder Point</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Alert Type</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockStockAlerts.map((alert) => (
            <TableRow key={alert.id}>
              <TableCell className="font-medium">{alert.product}</TableCell>
              <TableCell>{alert.sku}</TableCell>
              <TableCell>{alert.currentStock}</TableCell>
              <TableCell>{alert.reorderPoint}</TableCell>
              <TableCell>{alert.location}</TableCell>
              <TableCell>
                <Badge 
                  variant={alert.alertType === "Low Stock" ? "warning" : 
                          alert.alertType === "Out of Stock" ? "destructive" : 
                          alert.alertType === "Expiring" ? "outline" : "default"}
                >
                  {alert.alertType}
                </Badge>
              </TableCell>
              <TableCell>
                <Button size="sm">Create Order</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
