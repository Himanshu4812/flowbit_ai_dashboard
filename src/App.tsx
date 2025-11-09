import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Dashboard from '@/pages/Dashboard';
import Chat from '@/pages/Chat';
import Invoice from '@/pages/Invoice';
import OtherFiles from '@/pages/OtherFiles';
import Departments from '@/pages/Departments';
import Users from '@/pages/Users';
import Settings from '@/pages/Settings';
import { Home, MessageCircle, Receipt, FileText, Building2, Users as UsersIcon, Settings as SettingsIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

interface PageConfig {
  title: string;
  icon: ReactNode;
  element: ReactNode;
}

const pages: Record<string, PageConfig> = {
  '/': {
    title: 'Dashboard',
    icon: <Home className="h-5 w-5" />,
    element: <Dashboard />,
  },
  '/chat': {
    title: 'Chat with your data',
    icon: <MessageCircle className="h-5 w-5" />,
    element: <Chat />,
  },
  '/invoice': {
    title: 'Invoice',
    icon: <Receipt className="h-5 w-5" />,
    element: <Invoice />,
  },
  '/files': {
    title: 'Other Files',
    icon: <FileText className="h-5 w-5" />,
    element: <OtherFiles />,
  },
  '/departments': {
    title: 'Departments',
    icon: <Building2 className="h-5 w-5" />,
    element: <Departments />,
  },
  '/users': {
    title: 'Users',
    icon: <UsersIcon className="h-5 w-5" />,
    element: <Users />,
  },
  '/settings': {
    title: 'Settings',
    icon: <SettingsIcon className="h-5 w-5" />,
    element: <Settings />,
  },
};

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentPage = pages[currentPath] || pages['/'];

  return (
    <div className="flex min-h-screen w-full bg-background font-sans">
      <Sidebar />
      <main className="flex flex-1 flex-col">
        <Header title={currentPage.title} icon={currentPage.icon} />
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            {Object.entries(pages).map(([path, { element }]) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </main>
      <Toaster richColors />
    </div>
  );
}

export default App;
