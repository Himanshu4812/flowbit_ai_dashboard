import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ListFilter, Plus, Upload } from 'lucide-react';
import { FileType } from '@/lib/types';

interface FilesToolbarProps {
  activeTab: FileType;
  onTabChange: (tab: FileType) => void;
}

const tabs: FileType[] = ["All", "Documents", "Images", "Spreadsheets"];

const FilesToolbar = ({ activeTab, onTabChange }: FilesToolbarProps) => {
  return (
    <div className="flex items-center justify-between">
      <Tabs value={activeTab} onValueChange={(value) => onTabChange(value as FileType)}>
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
            <DropdownMenuItem>Name</DropdownMenuItem>
            <DropdownMenuItem>Date Uploaded</DropdownMenuItem>
            <DropdownMenuItem>Size</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" className="gap-1">
          <Upload className="h-4 w-4" />
          <span>Upload File</span>
        </Button>
      </div>
    </div>
  );
};

export default FilesToolbar;
