/* eslint-disable no-console */

import { API_URL } from '../constants';

const getQuestions = () => fetch(API_URL).then((res) => res.json());

export default getQuestions;
