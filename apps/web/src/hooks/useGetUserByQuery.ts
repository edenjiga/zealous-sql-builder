import { useMutation } from 'react-query';
import queryApiClient from '../api/queryApi';
import { QueryBuilderSubmitObject, UserResponse } from '@edgar/common-types';

const fetchUsersByQuery = async (query: QueryBuilderSubmitObject) => {
  const { data } = await queryApiClient.post<UserResponse>('/query', query);
  return data;
};

export const useGetUsersByQuery = () => {
  return useMutation('users', fetchUsersByQuery);
};
