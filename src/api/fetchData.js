import GenerateSessionToken from './generateSessionToken';
import { httpClient } from './httpClient';

export default async function fetchQuizes(query="") {
  const sessiontoken = await GenerateSessionToken();
  
  try {
    const response = await httpClient.get(`/api.php/?${query}&token=${sessiontoken}`);
    return response.data.results;
  } catch (err) {
    throw new Error('Failed To fetch data');
  }
}
