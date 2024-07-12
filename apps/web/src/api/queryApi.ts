import axios from 'axios';
import { TECHONOLOGIES_API } from '../constant';

const queryApiClient = axios.create({
  baseURL: TECHONOLOGIES_API, // Replace with your actual API base URL
});

export default queryApiClient;
