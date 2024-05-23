import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    method: 'GET',
    baseUrl: 'https://kinopoiskapiunofficial.tech/api',
    headers: {
      'X-API-KEY': import.meta.env.VITE_API_KEY,
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (build) => ({
    getInitialMovies: build.query({
      query: () => ({
        url: '/v2.2/films',
        params: {
          page: 2,
        },
      }),
    }),
    getMoviesById: build.query({
      query: (id) => ({
        url: `/v2.2/films/${id}`,
      }),
    }),
    getMoviesBySearch: build.query({
      query: (query) => ({
        url: `/v2.2/films?keyword=${query}`,
      }),
    }),
  }),
});

export const {
  useGetInitialMoviesQuery,
  useGetMoviesBySearchQuery,
  useGetMoviesByIdQuery,
} = kinopoiskApi;
