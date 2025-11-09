import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { vendorSpendData } from '@/lib/mockData';

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-3 shadow-sm">
          <p className="text-sm font-medium">{payload[0].payload.vendorName}</p>
          <p className="text-xs text-muted-foreground">Vendor Spend: <span className="font-semibold text-foreground">€ {payload[0].value.toLocaleString('de-DE')}</span></p>
        </div>
      );
    }
    return null;
  };

const VendorSpendChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spend by Vendor (Top 10)</CardTitle>
        <CardDescription>Vendor spend with cumulative percentage distribution.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={vendorSpendData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
              <XAxis 
                type="number" 
                tickFormatter={(value) => `€${Number(value) / 1000}k`} 
                tick={{ fontSize: 12 }} 
                axisLine={false} 
                tickLine={false}
              />
              <YAxis 
                type="category" 
                dataKey="vendorName" 
                width={80} 
                tick={{ fontSize: 12 }} 
                axisLine={false} 
                tickLine={false}
              />
              <Tooltip cursor={{ fill: 'hsl(var(--primary-light))' }} content={<CustomTooltip />} />
              <Bar dataKey="spend" radius={[0, 4, 4, 0]}>
                {vendorSpendData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    // @ts-ignore - fill colors come from CSS variables
                    fill={entry.vendorName === 'Global Supply' ? 'hsl(var(--chart-1))' : 'hsl(var(--chart-3))'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default VendorSpendChart;
