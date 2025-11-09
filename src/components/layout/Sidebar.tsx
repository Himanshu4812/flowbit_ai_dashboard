import { Link, useLocation } from 'react-router-dom';
import { Bot, Building2, ChevronsUpDown, FileText, LayoutDashboard, MessageCircle, Receipt, Settings, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: MessageCircle, label: 'Chat', path: '/chat' },
  { icon: Receipt, label: 'Invoice', path: '/invoice' },
  { icon: FileText, label: 'Other files', path: '/files' },
  { icon: Building2, label: 'Departments', path: '/departments' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden w-64 flex-col border-r bg-card p-4 md:flex">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-yellow-400" />
          <div>
            <p className="font-semibold">Buchhaltung</p>
            <p className="text-xs text-muted-foreground">12 members</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ChevronsUpDown className="h-4 w-4" />
        </Button>
      </div>

      <nav className="mt-8 flex flex-col gap-2">
        <p className="px-3 text-xs font-semibold uppercase text-muted-foreground">General</p>
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <Button
              key={label}
              variant="ghost"
              className={cn(
                'justify-start gap-3 px-3',
                isActive && 'bg-primary text-white hover:bg-primary/90 hover:text-white'
              )}
              asChild
            >
              <Link to={path}>
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </Link>
            </Button>
          );
        })}
      </nav>

      <div className="mt-auto flex items-center gap-2">
        <Bot className="h-6 w-6 text-primary" />
        <p className="font-semibold text-primary">Flowbit AI</p>
      </div>
    </aside>
  );
};

export default Sidebar;
