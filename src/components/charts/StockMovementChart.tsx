
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { mockStockMovementData } from "@/data/mockData";

export function StockMovementChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={mockStockMovementData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area 
          type="monotone" 
          dataKey="incoming"
          name="Incoming"
          stackId="1"
          stroke="#10b981" 
          fill="#10b981"
          fillOpacity={0.6}
        />
        <Area 
          type="monotone" 
          dataKey="outgoing"
          name="Outgoing"
          stackId="2"
          stroke="#ef4444" 
          fill="#ef4444"
          fillOpacity={0.6}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
