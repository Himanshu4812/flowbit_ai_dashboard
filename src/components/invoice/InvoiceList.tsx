import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { InvoicePageData } from '@/lib/types';
import { cn } from '@/lib/utils';

interface InvoiceListProps {
  invoices: InvoicePageData[];
  selectedInvoices: Set<string>;
  onSelectAll: (checked: boolean) => void;
  onSelectInvoice: (invoiceId: string, checked: boolean) => void;
  isAllSelected: boolean;
}

const getStatusBadgeVariant = (status: 'Pending' | 'Paid' | 'Overdue'): 'pending' | 'paid' | 'overdue' => {
  switch (status) {
    case 'Paid':
      return 'paid';
    case 'Pending':
      return 'pending';
    case 'Overdue':
      return 'overdue';
  }
};

const AvatarGroup = ({ users }: { users: { name: string; avatarUrl: string }[] }) => (
    <div className="flex -space-x-2 overflow-hidden">
      {users.slice(0, 2).map((user, index) => (
        <Avatar key={index} className="inline-block h-6 w-6 border-2 border-background">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      ))}
      {users.length > 2 && (
        <Avatar className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium text-muted-foreground">
          +{users.length - 2}
        </Avatar>
      )}
    </div>
  );

const InvoiceList = ({ invoices, selectedInvoices, onSelectAll, onSelectInvoice, isAllSelected }: InvoiceListProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">
            <Checkbox 
              checked={isAllSelected} 
              onCheckedChange={(checked) => onSelectAll(Boolean(checked))}
            />
          </TableHead>
          <TableHead>Invoice ID</TableHead>
          <TableHead>Vendor</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Assigned to</TableHead>
          <TableHead className="w-12"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id} data-state={selectedInvoices.has(invoice.id) ? 'selected' : ''}>
            <TableCell>
              <Checkbox 
                checked={selectedInvoices.has(invoice.id)}
                onCheckedChange={(checked) => onSelectInvoice(invoice.id, Boolean(checked))}
              />
            </TableCell>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7">
                  <AvatarImage src={invoice.vendor.avatarUrl} alt={invoice.vendor.name} />
                  <AvatarFallback>{invoice.vendor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {invoice.vendor.name}
              </div>
            </TableCell>
            <TableCell>{invoice.dueDate}</TableCell>
            <TableCell>€{invoice.amount.toFixed(2)}</TableCell>
            <TableCell>
              <Badge variant={getStatusBadgeVariant(invoice.status)}>
                {invoice.status}
              </Badge>
            </TableCell>
            <TableCell>
              <AvatarGroup users={invoice.assignedTo} />
            </TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InvoiceList;
