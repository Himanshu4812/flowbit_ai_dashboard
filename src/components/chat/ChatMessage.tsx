import { toast } from 'sonner';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChatMessageData } from '@/lib/types';
import { Bot, Copy } from 'lucide-react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const ChatMessage = ({ message }: { message: ChatMessageData }) => {
  const isUser = message.sender === 'user';

  const handleCopy = async () => {
    if (!message.sql) return;
    try {
      await navigator.clipboard.writeText(message.sql);
      toast.success('SQL query copied to clipboard!');
    } catch (err) {
      // The console log is removed as the toast provides sufficient user feedback.
      toast.error('Failed to copy query.', {
        description: 'Clipboard access is restricted in this environment.',
      });
    }
  };

  return (
    <div className="flex items-start gap-4">
      <Avatar className="h-9 w-9 border">
        {isUser ? (
          <>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AJ</AvatarFallback>
          </>
        ) : (
          <AvatarFallback className="bg-primary text-primary-foreground">
            <Bot className="h-5 w-5" />
          </AvatarFallback>
        )}
      </Avatar>
      <div className="grid flex-1 gap-2">
        <p className="font-semibold">{isUser ? 'You' : 'Flowbit AI'}</p>
        <div className="prose prose-sm max-w-none space-y-4 text-sm text-foreground">
          {message.content && <p>{message.content}</p>}

          {message.sql && (
            <div className="rounded-md border bg-muted/50">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-xs font-semibold uppercase text-muted-foreground">SQL Query</span>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleCopy}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="overflow-x-auto bg-background p-4 text-xs">
                <code>{message.sql}</code>
              </pre>
            </div>
          )}

          {message.table && (
            <Table>
              <TableHeader>
                <TableRow>
                  {message.table.columns.map((col) => (
                    <TableHead key={col}>{col}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {message.table.rows.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <TableCell key={cellIndex}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {message.chart && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Chart Visualization</CardTitle>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={message.chart.data} layout="vertical" margin={{ left: 20, right: 20 }}>
                    <XAxis type="number" hide />
                    <YAxis
                      type="category"
                      dataKey={message.chart.categoryKey}
                      width={100}
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <Bar dataKey={message.chart.dataKey} fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
