/* eslint-disable no-console */

import { API_URL } from '../constants';

console.log(API_URL);

const getQuestions = () => fetch(API_URL).then((res) => res.json());

export default getQuestions;
