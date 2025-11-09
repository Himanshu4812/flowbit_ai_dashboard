import { KpiCardData, ChatMessageData, InvoicePageData, OtherFileData } from './types';

export const kpiData: KpiCardData[] = [
  {
    title: 'Total Spend',
    value: '€12,679.25',
    change: '+8.2%',
    changeType: 'increase',
    period: '(YTD)',
    chartData: [{ value: 10 }, { value: 20 }, { value: 15 }, { value: 30 }, { value: 25 }, { value: 40 }],
  },
  {
    title: 'Total Invoices Processed',
    value: '64',
    change: '+8.2%',
    changeType: 'increase',
    period: 'This Month',
    chartData: [{ value: 10 }, { value: 15 }, { value: 12 }, { value: 22 }, { value: 28 }, { value: 35 }],
  },
  {
    title: 'Documents Uploaded',
    value: '17',
    change: '8',
    changeType: 'decrease',
    period: 'This Month',
    chartData: [{ value: 40 }, { value: 30 }, { value: 35 }, { value: 20 }, { value: 18 }, { value: 17 }],
  },
  {
    title: 'Average Invoice Value',
    value: '€2,455.00',
    change: '+8.2%',
    changeType: 'increase',
    period: '(YTD)',
    chartData: [{ value: 10 }, { value: 20 }, { value: 15 }, { value: 30 }, { value: 25 }, { value: 40 }],
  },
];

export const invoiceTrendData = [
  { month: 'Jan', invoiceCount: 30, totalSpend: 4000 },
  { month: 'Feb', invoiceCount: 48, totalSpend: 6000 },
  { month: 'Mar', invoiceCount: 65, totalSpend: 7000 },
  { month: 'Apr', invoiceCount: 40, totalSpend: 5500 },
  { month: 'May', invoiceCount: 55, totalSpend: 6500 },
  { month: 'Jun', invoiceCount: 45, totalSpend: 5800 },
  { month: 'Jul', invoiceCount: 60, totalSpend: 7200 },
  { month: 'Aug', invoiceCount: 50, totalSpend: 6800 },
  { month: 'Sep', invoiceCount: 58, totalSpend: 7500 },
  { month: 'Oct', invoiceCount: 47, totalSpend: 8679.25 },
  { month: 'Nov', invoiceCount: 40, totalSpend: 6200 },
  { month: 'Dec', invoiceCount: 35, totalSpend: 5500 },
];

export const vendorSpendData = [
  { vendorName: 'AcmeCorp', spend: 42000 },
  { vendorName: 'Test Solutions', spend: 35000 },
  { vendorName: 'PrimeVendors', spend: 32000 },
  { vendorName: 'DeltaServices', spend: 28000 },
  { vendorName: 'Global Supply', spend: 15000 },
  { vendorName: 'OmegaLtd', spend: 12000 },
  { vendorName: 'OmegaLLC', spend: 10000 },
];

export const categorySpendData = [
  { name: 'Operations', value: 7250, fill: 'hsl(var(--chart-1))' },
  { name: 'Marketing', value: 1000, fill: 'hsl(var(--chart-2))' },
  { name: 'Facilities', value: 1000, fill: 'hsl(var(--chart-5))' },
];

export const cashOutflowData = [
  { name: '0-7 days', value: 45000 },
  { name: '8-30 days', value: 18000 },
  { name: '31-60 days', value: 8000 },
  { name: '60+ days', value: 42000 },
];

export const invoicesData = [
  { vendor: 'Phunix GmbH', date: '19.08.2025', netValue: '€736.784,00' },
  { vendor: 'Phunix GmbH', date: '19.08.2025', netValue: '€736.784,00' },
  { vendor: 'Phunix GmbH', date: '19.08.2025', netValue: '€736.784,00' },
  { vendor: 'Phunix GmbH', date: '19.08.2025', netValue: '€736.784,00' },
  { vendor: 'Phunix GmbH', date: '19.08.2025', netValue: '€736.784,00' },
  { vendor: 'Phunix GmbH', date: '19.08.2025', netValue: '€736.784,00' },
  { vendor: 'Phunix GmbH', date: '19.08.2025', netValue: '€736.784,00' },
];

export const chatMessages: ChatMessageData[] = [
    {
      sender: 'user',
      content: 'Top 5 vendors by total spend in the last 6 months',
    },
    {
      sender: 'ai',
      content: "Of course. Here is the SQL query and the results for the top 5 vendors by total spend in the last 6 months.",
      sql: `SELECT v.name, SUM(i."totalAmount") AS total_spend
FROM "Vendor" v
JOIN "Invoice" i ON v.id = i."vendorId"
WHERE i."issueDate" >= NOW() - INTERVAL '6 months'
GROUP BY v.name
ORDER BY total_spend DESC
LIMIT 5;`,
      table: {
        columns: ['Vendor Name', 'Total Spend'],
        rows: [
          ['AcmeCorp', '€42,000.00'],
          ['Test Solutions', '€35,000.00'],
          ['PrimeVendors', '€32,000.00'],
          ['DeltaServices', '€28,000.00'],
          ['Global Supply', '€15,000.00'],
        ],
      },
      chart: {
        data: [
            { name: 'AcmeCorp', value: 42000 },
            { name: 'Test Solutions', value: 35000 },
            { name: 'PrimeVendors', value: 32000 },
            { name: 'DeltaServices', value: 28000 },
            { name: 'Global Supply', value: 15000 },
        ],
        dataKey: 'value',
        categoryKey: 'name',
      },
    },
  ];

  export const invoicePageData: InvoicePageData[] = [
    {
      id: 'INV-2024-001',
      vendor: { name: 'Tech Solutions', avatarUrl: '/avatars/vendor1.png' },
      dueDate: '24.07.2025',
      amount: 1250.00,
      status: 'Pending',
      assignedTo: [
        { name: 'User 1', avatarUrl: 'https://github.com/shadcn.png' },
        { name: 'User 2', avatarUrl: 'https://github.com/vercel.png' },
      ],
    },
    {
        id: 'INV-2024-002',
        vendor: { name: 'Creative Minds', avatarUrl: '/avatars/vendor2.png' },
        dueDate: '20.07.2025',
        amount: 850.50,
        status: 'Paid',
        assignedTo: [
          { name: 'User 1', avatarUrl: 'https://github.com/shadcn.png' },
        ],
      },
      {
        id: 'INV-2024-003',
        vendor: { name: 'Global Exports', avatarUrl: '/avatars/vendor3.png' },
        dueDate: '15.06.2025',
        amount: 3200.00,
        status: 'Overdue',
        assignedTo: [
          { name: 'User 1', avatarUrl: 'https://github.com/shadcn.png' },
          { name: 'User 2', avatarUrl: 'https://github.com/vercel.png' },
          { name: 'User 3', avatarUrl: 'https://github.com/nextjs.png' },
        ],
      },
      {
        id: 'INV-2024-004',
        vendor: { name: 'Innovate Inc.', avatarUrl: '/avatars/vendor4.png' },
        dueDate: '30.07.2025',
        amount: 450.75,
        status: 'Pending',
        assignedTo: [
          { name: 'User 2', avatarUrl: 'https://github.com/vercel.png' },
        ],
      },
      {
        id: 'INV-2024-005',
        vendor: { name: 'Quantum Systems', avatarUrl: '/avatars/vendor5.png' },
        dueDate: '01.07.2025',
        amount: 2100.00,
        status: 'Paid',
        assignedTo: [
          { name: 'User 1', avatarUrl: 'https://github.com/shadcn.png' },
        ],
      },
      {
        id: 'INV-2024-006',
        vendor: { name: 'Alpha Logistics', avatarUrl: '/avatars/vendor6.png' },
        dueDate: '05.08.2025',
        amount: 980.00,
        status: 'Pending',
        assignedTo: [
          { name: 'User 1', avatarUrl: 'https://github.com/shadcn.png' },
          { name: 'User 3', avatarUrl: 'https://github.com/nextjs.png' },
        ],
      },
  ];

  export const otherFilesData: OtherFileData[] = [
    {
      id: 'DOC-001',
      name: 'Master Service Agreement.pdf',
      type: 'PDF',
      size: '2.5 MB',
      uploadDate: '15.07.2025',
      uploader: { name: 'Amit Jadhav', avatarUrl: 'https://github.com/shadcn.png' },
    },
    {
      id: 'DOC-002',
      name: 'Q3 Marketing Report.docx',
      type: 'Word',
      size: '800 KB',
      uploadDate: '12.07.2025',
      uploader: { name: 'Jane Doe', avatarUrl: 'https://github.com/vercel.png' },
    },
    {
      id: 'DOC-003',
      name: 'Office_Renovation_Receipt.png',
      type: 'Image',
      size: '1.2 MB',
      uploadDate: '10.07.2025',
      uploader: { name: 'Amit Jadhav', avatarUrl: 'https://github.com/shadcn.png' },
    },
    {
      id: 'DOC-004',
      name: 'FY2025 Budget.xlsx',
      type: 'Excel',
      size: '450 KB',
      uploadDate: '05.07.2025',
      uploader: { name: 'John Smith', avatarUrl: 'https://github.com/nextjs.png' },
    },
    {
      id: 'DOC-005',
      name: 'Team Offsite Photos.zip',
      type: 'Image',
      size: '25.8 MB',
      uploadDate: '02.07.2025',
      uploader: { name: 'Jane Doe', avatarUrl: 'https://github.com/vercel.png' },
    },
    {
        id: 'DOC-006',
        name: 'Vendor_Onboarding.pdf',
        type: 'PDF',
        size: '950 KB',
        uploadDate: '01.07.2025',
        uploader: { name: 'Amit Jadhav', avatarUrl: 'https://github.com/shadcn.png' },
      },
  ];
