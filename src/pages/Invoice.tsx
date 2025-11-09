import { useState } from 'react';
import { Card } from '@/components/ui/card';
import InvoiceList from '@/components/invoice/InvoiceList';
import InvoicePagination from '@/components/invoice/InvoicePagination';
import InvoiceToolbar from '@/components/invoice/InvoiceToolbar';
import { invoicePageData } from '@/lib/mockData';
import { InvoicePageData, InvoiceStatus } from '@/lib/types';

const Invoice = () => {
  const [activeTab, setActiveTab] = useState<InvoiceStatus>('All');
  const [selectedInvoices, setSelectedInvoices] = useState<Set<string>>(new Set());

  const filteredInvoices = invoicePageData.filter(
    (invoice) => activeTab === 'All' || invoice.status === activeTab
  );

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedInvoices(new Set(filteredInvoices.map(i => i.id)));
    } else {
      setSelectedInvoices(new Set());
    }
  };

  const handleSelectInvoice = (invoiceId: string, checked: boolean) => {
    setSelectedInvoices(prev => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(invoiceId);
      } else {
        newSet.delete(invoiceId);
      }
      return newSet;
    });
  };

  const isAllSelected = selectedInvoices.size > 0 && selectedInvoices.size === filteredInvoices.length;

  return (
    <div className="space-y-4">
      <InvoiceToolbar activeTab={activeTab} onTabChange={setActiveTab} />
      <Card className="shadow-none">
        <InvoiceList
          invoices={filteredInvoices}
          selectedInvoices={selectedInvoices}
          onSelectAll={handleSelectAll}
          onSelectInvoice={handleSelectInvoice}
          isAllSelected={isAllSelected}
        />
        <InvoicePagination />
      </Card>
    </div>
  );
};

export default Invoice;
