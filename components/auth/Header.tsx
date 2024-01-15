import { cn } from '@/lib/utils';
import { Roboto } from 'next/font/google';

const font = Roboto({
  subsets: ['latin'],
  weight: ['500'],
});

type HeaderProps = {
  label: string;
};

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className='wi-full flex flex-col gap-y-4 items-center justify-center'>
      <h1 className={cn('text-3xl font-semibold ', font.className)}>🔐 Auth</h1>

      <p className='text-muted-foreground'>{label}</p>
    </div>
  );
};
