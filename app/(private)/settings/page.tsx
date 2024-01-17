'use client';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';

const SettingPage = () => {
  const currentUser = useCurrentUser();

  return (
    <div className='bg-white p-10 rounded-xl'>
      <Button type='submit' onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  );
};

export default SettingPage;
