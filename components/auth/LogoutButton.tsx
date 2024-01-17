'use client';

import { signOut } from 'next-auth/react';
import { ReactNode } from 'react';

export const LogoutButton = ({ children }: { children?: ReactNode }) => {
  const onClick = () => {
    signOut();
  };

  return (
    <span onClick={onClick} className='cursor-pointer'>
      {children}
    </span>
  );
};
