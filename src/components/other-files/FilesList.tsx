import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, FileText, FileSpreadsheet, FileImage } from 'lucide-react';
import { OtherFileData } from '@/lib/types';
import { ReactNode } from 'react';

interface FilesListProps {
  files: OtherFileData[];
  selectedFiles: Set<string>;
  onSelectAll: (checked: boolean) => void;
  onSelectFile: (fileId: string, checked: boolean) => void;
  isAllSelected: boolean;
}

const getFileIcon = (type: OtherFileData['type']): ReactNode => {
    switch (type) {
      case 'PDF':
      case 'Word':
        return <FileText className="h-5 w-5 text-muted-foreground" />;
      case 'Excel':
        return <FileSpreadsheet className="h-5 w-5 text-muted-foreground" />;
      case 'Image':
        return <FileImage className="h-5 w-5 text-muted-foreground" />;
      default:
        return <FileText className="h-5 w-5 text-muted-foreground" />;
    }
  };

const FilesList = ({ files, selectedFiles, onSelectAll, onSelectFile, isAllSelected }: FilesListProps) => {
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
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Date Uploaded</TableHead>
          <TableHead>Uploaded by</TableHead>
          <TableHead className="w-12"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((file) => (
          <TableRow key={file.id} data-state={selectedFiles.has(file.id) ? 'selected' : ''}>
            <TableCell>
              <Checkbox 
                checked={selectedFiles.has(file.id)}
                onCheckedChange={(checked) => onSelectFile(file.id, Boolean(checked))}
              />
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    {getFileIcon(file.type)}
                    <span className="font-medium">{file.name}</span>
                </div>
            </TableCell>
            <TableCell>{file.type}</TableCell>
            <TableCell>{file.size}</TableCell>
            <TableCell>{file.uploadDate}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7">
                  <AvatarImage src={file.uploader.avatarUrl} alt={file.uploader.name} />
                  <AvatarFallback>{file.uploader.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {file.uploader.name}
              </div>
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

export default FilesList;
