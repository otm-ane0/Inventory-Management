
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { mockInventoryValueData } from "@/data/mockData";

export function InventoryValueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={mockInventoryValueData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="date" />
        <YAxis 
          tickFormatter={(value) => `$${value / 1000}k`} 
          domain={['auto', 'auto']} 
        />
        <Tooltip 
          formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Inventory Value']} 
          labelFormatter={(label) => `Date: ${label}`}
        />
        <Line 
          type="monotone" 
          dataKey="value"
          stroke="#3b82f6"
          strokeWidth={2} 
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
