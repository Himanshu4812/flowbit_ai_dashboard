import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface User {
  name: string;
  email: string;
  avatarUrl: string;
  role: string;
}

interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const initialUser: User = {
  name: 'Amit Jadhav',
  email: 'amit.jadhav@example.com',
  avatarUrl: 'https://github.com/shadcn.png',
  role: 'Admin',
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
