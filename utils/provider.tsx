'use client';

import { QueryClient } from '@tanstack/query-core';
import React, { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      <RecoilRoot>{children}</RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
