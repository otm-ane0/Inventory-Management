
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { mockStockLevelData } from "@/data/mockData";

export function StockLevelChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={mockStockLevelData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip content={({ active, payload }) => {
          if (active && payload && payload.length) {
            return (
              <div className="rounded-lg border bg-background p-2 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col">
                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                      In Stock
                    </span>
                    <span className="font-bold text-green-500">
                      {payload[0].value}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                      Low Stock
                    </span>
                    <span className="font-bold text-amber-500">
                      {payload[1].value}
                    </span>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        }} />
        <Legend />
        <Bar
          dataKey="inStock"
          name="In Stock"
          fill="#10b981"
          radius={[4, 4, 0, 0]}
          barSize={20}
        />
        <Bar
          dataKey="lowStock"
          name="Low Stock"
          fill="#f59e0b"
          radius={[4, 4, 0, 0]}
          barSize={20}
        />
        <Bar
          dataKey="outOfStock"
          name="Out of Stock"
          fill="#ef4444"
          radius={[4, 4, 0, 0]}
          barSize={20}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
