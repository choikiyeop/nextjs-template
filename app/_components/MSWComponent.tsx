'use client';

export const MSWComponent = async () => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof window === 'undefined') {
      const { server } = await import('@/__mocks__/server');
      server.listen();
    } else {
      const { worker } = await import('@/__mocks__/browser');
      worker.start();
    }
  }

  return <></>;
};
