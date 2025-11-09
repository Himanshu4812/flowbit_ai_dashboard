import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfileForm from '@/components/settings/ProfileForm';
import AppearanceForm from '@/components/settings/AppearanceForm';
import NotificationsForm from '@/components/settings/NotificationsForm';

const Settings = () => {
  return (
    <Tabs defaultValue="profile" className="space-y-4">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <ProfileForm />
      </TabsContent>
      <TabsContent value="appearance">
        <AppearanceForm />
      </TabsContent>
      <TabsContent value="notifications">
        <NotificationsForm />
      </TabsContent>
    </Tabs>
  );
};

export default Settings;
