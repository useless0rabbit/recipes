import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Создаем API slice
export const apiSlice = createApi({
  reducerPath: 'api', // уникальный ключ в state
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    fetchRecipes: builder.query({
      query: () => 'recipes', // Запрос к API
    }),
  }),
});

// Экспортируем хук для запроса
export const { useFetchRecipesQuery } = apiSlice;
