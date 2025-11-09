import { ReactNode } from "react";

export interface KpiCardData {
    title: string;
    value: string;
    period: string;
    change: string;
    changeType: 'increase' | 'decrease';
    chartData: { value: number }[];
  }
  
  export interface InvoiceTrendData {
    month: string;
    invoiceCount: number;
    totalSpend: number;
  }
  
  export interface VendorSpendData {
    vendorName: string;
    spend: number;
  }
  
  export interface CategorySpendData {
    name: string;
    value: number;
    fill: string;
  }
  
  export interface CashflowData {
    range: string;
    amount: number;
  }
  
  export interface InvoiceData {
    vendor: string;
    invoiceDate: string;
    netValue: string;
  }

  export interface ChatMessageData {
    sender: 'user' | 'ai';
    content?: string;
    sql?: string;
    table?: {
      columns: string[];
      rows: (string | number)[][];
    };
    chart?: {
      data: any[];
      dataKey: string;
      categoryKey: string;
    };
  }

  export type InvoiceStatus = "All" | "Pending" | "Paid" | "Overdue";

  export interface InvoicePageData {
    id: string;
    vendor: {
      name: string;
      avatarUrl: string;
    };
    dueDate: string;
    amount: number;
    status: "Pending" | "Paid" | "Overdue";
    assignedTo: {
      name: string;
      avatarUrl: string;
    }[];
  }

  export type FileType = "All" | "Documents" | "Images" | "Spreadsheets";

  export interface OtherFileData {
    id: string;
    name: string;
    type: "PDF" | "Word" | "Image" | "Excel";
    size: string;
    uploadDate: string;
    uploader: {
      name: string;
      avatarUrl: string;
    };
  }
