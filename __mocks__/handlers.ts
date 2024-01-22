import { HttpResponse, PathParams, http } from 'msw';

type LoginType = {
  username: string;
  password: string;
};

export const handlers = [
  http.post<PathParams, LoginType>('/login', async ({ request }) => {
    const body = await request.json();

    if (body?.username === 'admin' && body?.password === 'admin') {
      return HttpResponse.json({
        status: 'ok',
        response: {
          accessToken: 'accessasd',
          refreshToken: 'refreshasd',
        },
      });
    }
    return HttpResponse.error();
  }),
];
