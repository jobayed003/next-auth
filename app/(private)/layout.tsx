import { ReactNode } from 'react';
import { Navbar } from './_components/Navbar';

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full w-full pt-6 flex flex-col gap-y-10 items-center background-gradient'>
      <Navbar />

      {children}
    </div>
  );
};

export default PrivateLayout;
