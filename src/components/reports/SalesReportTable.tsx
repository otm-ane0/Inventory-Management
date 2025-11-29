
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockSalesData } from "@/data/mockData";

export function SalesReportTable() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Units Sold</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Profit</TableHead>
            <TableHead>Profit Margin</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockSalesData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.product}</TableCell>
              <TableCell>{item.sku}</TableCell>
              <TableCell>{item.unitsSold}</TableCell>
              <TableCell>${item.revenue.toLocaleString()}</TableCell>
              <TableCell>${item.cost.toLocaleString()}</TableCell>
              <TableCell>${item.profit.toLocaleString()}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <div 
                    className={`h-2 w-full max-w-24 rounded-full ${item.profitMargin >= 40 ? 'bg-green-500' : item.profitMargin >= 25 ? 'bg-amber-500' : 'bg-red-500'}`}
                    style={{ width: `${Math.min(100, item.profitMargin)}%` }}
                  ></div>
                  <span className="ml-2">{item.profitMargin}%</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
