import { server } from '@/__mocks__/server';
import '@testing-library/jest-dom';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vi.clearAllMocks();
});

afterAll(() => {
  server.close();
  vi.resetAllMocks();
});

vi.mock('zustand');
