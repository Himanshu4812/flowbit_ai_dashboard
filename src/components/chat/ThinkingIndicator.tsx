import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot } from 'lucide-react';

const ThinkingIndicator = () => {
  return (
    <div className="flex items-start gap-4">
      <Avatar className="h-9 w-9 border">
        <AvatarFallback className="bg-primary text-primary-foreground">
          <Bot className="h-5 w-5" />
        </AvatarFallback>
      </Avatar>
      <div className="grid flex-1 gap-2">
        <p className="font-semibold">Flowbit AI</p>
        <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ThinkingIndicator;
