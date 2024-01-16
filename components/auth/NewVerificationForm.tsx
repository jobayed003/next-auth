'use client';

import { newVerification } from '@/actions/new-verification';
import { CardWrapper } from '@/components/auth/CardWrapper';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { FormError } from '@/components/FormError';
import { FormSuccess } from '@/components/FormSuccess';
import { BeatLoader } from 'react-spinners';

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (!token) {
      setError('Missing token');
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('Something wrong occured!');
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel='Confirming your verification'
      backButtonHref='/auth/login'
      backButtonLabel='Back to login'
    >
      <div className='flex items-center w-full justify-center'>
        {!success && !error && <BeatLoader />}

        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};
