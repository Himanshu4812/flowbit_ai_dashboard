import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ListFilter, Plus, Upload } from 'lucide-react';
import { InvoiceStatus } from '@/lib/types';

interface InvoiceToolbarProps {
  activeTab: InvoiceStatus;
  onTabChange: (tab: InvoiceStatus) => void;
}

const tabs: InvoiceStatus[] = ["All", "Pending", "Paid", "Overdue"];

const InvoiceToolbar = ({ activeTab, onTabChange }: InvoiceToolbarProps) => {
  return (
    <div className="flex items-center justify-between">
      <Tabs value={activeTab} onValueChange={(value) => onTabChange(value as InvoiceStatus)}>
        <TabsList>
          {tabs.map(tab => (
            <TabsTrigger key={tab} value={tab}>{tab}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1">
              <ListFilter className="h-4 w-4" />
              <span>Sort by</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Due Date</DropdownMenuItem>
            <DropdownMenuItem>Amount</DropdownMenuItem>
            <DropdownMenuItem>Status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" size="sm" className="gap-1">
          <Upload className="h-4 w-4" />
          <span>Import</span>
        </Button>
        <Button size="sm" className="gap-1">
          <Plus className="h-4 w-4" />
          <span>New Invoice</span>
        </Button>
      </div>
    </div>
  );
};

export default InvoiceToolbar;
