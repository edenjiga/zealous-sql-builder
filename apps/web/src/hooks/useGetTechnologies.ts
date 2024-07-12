import { useQuery } from 'react-query';
import { Technology } from '../types';
import queryApiClient from '../api/queryApi';

const GET_TECHNOLOGIES_QUERY_KEY = 'GET_TECHNOLOGIES_QUERY_KEY';

const getAllTechnologies = async (): Promise<Array<Technology>> => {
  const { data } = await queryApiClient.get('/technologies');

  return data.data;
};

export const useGetTechnologies = () => {
  // Queries
  const query = useQuery(GET_TECHNOLOGIES_QUERY_KEY, getAllTechnologies);

  return query;
};
