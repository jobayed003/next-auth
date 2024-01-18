import { LoginButton } from '@/components/auth/LoginButton';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Roboto } from 'next/font/google';

const font = Roboto({
  subsets: ['latin'],
  weight: ['500'],
});

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center background-gradient'>
      <div className='space-y-6 text-center'>
        <h1 className={cn('text-6xl font-semibold text-white drop-shadow-md', font.className)}>🔐 Auth</h1>

        <p className='text-white text-lg'>A simple authetication service</p>

        <div>
          <LoginButton mode='modal' asChild>
            <Button variant={'secondary'} size={'lg'}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
