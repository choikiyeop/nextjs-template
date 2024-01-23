import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default async function getUserEventFromComponent(component: ReactElement) {
  const user = userEvent.setup();

  return {
    user,
    ...render(<QueryClientProvider client={queryClient}>{component}</QueryClientProvider>),
  };
}
