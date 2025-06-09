import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const skipsApi = createApi({
  reducerPath: 'skipsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app.wewantwaste.co.uk/api/',
  }),
  tagTypes: ['Skip'],
  endpoints: (builder) => ({
    getSkipsByLocation: builder.query({
      query: ({ postcode, area }) => ({
        url: `skips/by-location`,
        params: { postcode, area },
      }),
      providesTags: ['Skip'],
    }),
  }),
});

export const { useGetSkipsByLocationQuery } = skipsApi;