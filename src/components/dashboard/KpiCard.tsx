import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { KpiCardData } from '@/lib/types';
import { cn } from '@/lib/utils';

const KpiCard = ({ title, value, period, change, changeType, chartData }: KpiCardData) => {
  const isIncrease = changeType === 'increase';
  const chartColor = isIncrease ? 'hsl(var(--chart-5))' : 'hsl(var(--chart-negative))';

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <span className="text-xs text-muted-foreground">{period}</span>
      </CardHeader>
      <CardContent>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-3xl font-bold">{value}</div>
            <p className={cn('text-xs', isIncrease ? 'text-green-600' : 'text-red-600', 'flex items-center gap-1')}>
              {isIncrease ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
              {change} {isIncrease ? 'from last month' : 'less from last month'}
            </p>
          </div>
          <div className="h-12 w-24">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id={`color${isIncrease ? 'Up' : 'Down'}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartColor} stopOpacity={0.4} />
                    <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip
                  cursor={false}
                  contentStyle={{ display: 'none' }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={chartColor}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill={`url(#color${isIncrease ? 'Up' : 'Down'})`}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KpiCard;
