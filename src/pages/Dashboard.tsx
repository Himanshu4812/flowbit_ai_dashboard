import KpiCard from '@/components/dashboard/KpiCard';
import InvoiceTrendChart from '@/components/dashboard/InvoiceTrendChart';
import VendorSpendChart from '@/components/dashboard/VendorSpendChart';
import CategorySpendChart from '@/components/dashboard/CategorySpendChart';
import CashOutflowChart from '@/components/dashboard/CashOutflowChart';
import InvoicesTable from '@/components/dashboard/InvoicesTable';
import { kpiData } from '@/lib/mockData';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((item, index) => (
          <KpiCard key={index} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <InvoiceTrendChart />
        </div>
        <div className="lg:col-span-2">
          <VendorSpendChart />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <CategorySpendChart />
        </div>
        <div className="lg:col-span-3">
          <CashOutflowChart />
        </div>
      </div>
      <div>
        <InvoicesTable />
      </div>
    </div>
  );
};

export default Dashboard;
