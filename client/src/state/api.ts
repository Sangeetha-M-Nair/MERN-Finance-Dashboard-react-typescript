import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"], //keep information
  endpoints: (build) => ({
    //here we create API calls

    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),

    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),

    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),

    // deleteProduct:
    //   invalidateTags: ["Products"]
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;
//same name as the api calls but use and query is added

// This code creates an API using the
// createApi
//  function from the
// @reduxjs/toolkit/query/react
//  library. The API has a single endpoint called
// getKpis
//  which makes a GET request to the
// kpi/kpis/
//  endpoint. The
// fetchBaseQuery
//  function is used to set the base URL for the API, which is obtained from the
// VITE_BASE_URL
//  environment variable. The
// providesTags
//  option is used to specify that the
// Kpis
//  tag should be invalidated whenever the
// getKpis
//  endpoint is called.
