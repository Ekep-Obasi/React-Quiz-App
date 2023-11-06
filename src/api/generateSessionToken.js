import { httpClient } from './httpClient';

export default async function GenerateSessionToken() {
  try {
    const result = await httpClient.get('api_token.php?command=request');
    return result.data.token;
  } catch (err) {
    throw new Error('Failed To Generate Session token');
  }
}
