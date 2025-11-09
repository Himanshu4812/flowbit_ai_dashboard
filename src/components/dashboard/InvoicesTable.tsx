import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { invoicesData } from '@/lib/mockData';

const InvoicesTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoices by Vendor</CardTitle>
        <CardDescription>Top vendors by invoice count and net value.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vendor</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Net Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoicesData.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{invoice.vendor}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell className="text-right">{invoice.netValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default InvoicesTable;
