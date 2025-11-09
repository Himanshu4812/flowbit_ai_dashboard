import { useState } from 'react';
import { Card } from '@/components/ui/card';
import FilesList from '@/components/other-files/FilesList';
import FilesPagination from '@/components/other-files/FilesPagination';
import FilesToolbar from '@/components/other-files/FilesToolbar';
import { otherFilesData } from '@/lib/mockData';
import { FileType } from '@/lib/types';

const OtherFiles = () => {
  const [activeTab, setActiveTab] = useState<FileType>('All');
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());

  const filteredFiles = otherFilesData.filter((file) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Documents') return file.type === 'PDF' || file.type === 'Word';
    if (activeTab === 'Images') return file.type === 'Image';
    if (activeTab === 'Spreadsheets') return file.type === 'Excel';
    return false;
  });

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedFiles(new Set(filteredFiles.map(f => f.id)));
    } else {
      setSelectedFiles(new Set());
    }
  };

  const handleSelectFile = (fileId: string, checked: boolean) => {
    setSelectedFiles(prev => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(fileId);
      } else {
        newSet.delete(fileId);
      }
      return newSet;
    });
  };

  const isAllSelected = selectedFiles.size > 0 && selectedFiles.size === filteredFiles.length;

  return (
    <div className="space-y-4">
      <FilesToolbar activeTab={activeTab} onTabChange={setActiveTab} />
      <Card className="shadow-none">
        <FilesList
          files={filteredFiles}
          selectedFiles={selectedFiles}
          onSelectAll={handleSelectAll}
          onSelectFile={handleSelectFile}
          isAllSelected={isAllSelected}
        />
        <FilesPagination />
      </Card>
    </div>
  );
};

export default OtherFiles;
