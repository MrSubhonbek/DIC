import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICurrencies } from "./interface";
import { ISymbols } from "./symbols";

export const converterCoreAPI = createApi({
  reducerPath: "converterAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.apilayer.com/fixer/",
    prepareHeaders: (headers) => {
      headers.set("apikey", "xOPqtOQpRE4yP4y635q7hTn4v5LtGJCK");
      return headers;
    },
  }),
  endpoints: (build) => ({
    fetchAllConverter: build.query<ICurrencies, void>({
      query: () => ({
        url: `/latest`,
      }),
    }),
    fetchAllNameCurrency: build.query<ISymbols, void>({
      query: () => ({
        url: `/symbols`,
      }),
    }),
  }),
});
export const { useFetchAllConverterQuery, useFetchAllNameCurrencyQuery } =
  converterCoreAPI;
