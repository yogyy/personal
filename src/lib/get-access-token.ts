import { env } from '@/env';

export const getAccessToken = async (refresh_token: string) => {
  const token = Buffer.from(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`).toString(
    'base64',
  );

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token }),
  });

  if (!res.ok) {
    throw new Error(`Failed to refresh token: ${res.status} ${res.statusText}`);
  }

  const data: { access_token: string } = await res.json();

  return data.access_token;
};
