'use client';

import { FormError } from '@/components/FormError';
import { useCurrentRole } from '@/hooks/useCurrentRole';
import { UserRole } from '@prisma/client';
import { ReactNode } from 'react';

type RoleGateProps = {
  children: ReactNode;
  allowedRole: UserRole;
};

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return <FormError message='You do not have permission to view this content!' />;
  }

  return <>{children}</>;
};
