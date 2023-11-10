// import GenerateSessionToken from './generateSessionToken';
import { httpClient } from './httpClient';

export default async function fetchQuizes(query= "amount=10") {
  try {
    const response = await httpClient.get(`/api.php/?${query}`);
    return {response: response.data.results, errorCode: response.data.response_code};
  } catch (err) {
    throw new Error('Failed To fetch data');
  }
}
