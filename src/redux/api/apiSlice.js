import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    fetchRecipes: builder.query({
      query: () => 'recipes',
      transformResponse: (response) => {
        return Array.isArray(response) ? response : response?.recipes || [];
      },
    }),
  }),
});

export const { useFetchRecipesQuery } = apiSlice;
