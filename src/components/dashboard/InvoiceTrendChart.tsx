import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { invoiceTrendData } from '@/lib/mockData';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-3 shadow-sm">
        <p className="text-sm font-medium">October 2025</p>
        <p className="text-xs text-muted-foreground">Invoice count: <span className="font-semibold text-foreground">{payload[0].payload.invoiceCount}</span></p>
        <p className="text-xs text-muted-foreground">Total Spend: <span className="font-semibold text-foreground">€ 8,679.25</span></p>
      </div>
    );
  }
  return null;
};


const InvoiceTrendChart = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Invoice Volume + Value Trend</CardTitle>
          <CardDescription>Invoice count and total spend over 12 months.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={invoiceTrendData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="totalSpend" stroke="hsl(var(--chart-4))" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="invoiceCount" stroke="hsl(var(--chart-1))" strokeWidth={3} dot={false} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    );
  };
  
  export default InvoiceTrendChart;
