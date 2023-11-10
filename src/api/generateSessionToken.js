import { httpClient } from './httpClient';

export default async function GenerateSessionToken() {
  try {
    const result = await httpClient.get('api_token.php?command=request');
    sessionStorage.setItem('session-token', result.data.token);
    return result.data.token;
  } catch (err) {
    throw new Error('Failed To Generate Session token');
  }
}
