/* eslint-disable @typescript-eslint/no-explicit-any */
// import { logoutUser } from "@/store/features/authSlice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "./endpoints";

interface IGetDataArgs {
  url: string;
  params?: Record<string, string | number | boolean>;
  tag?: string;
}
interface IPostDataArgs {
  url: string;
  data?: any;
  options?: any;
  invalidateTag?: string;
}
interface IUpdateDataArgs {
  url: string;
  data: any;
  options?: any;
  invalidateTag?: string;
}
interface IDeleteDataArgs {
  url: string;
  body?: any;
  options?: any;
  invalidates?: string[];
}

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  prepareHeaders: async (headers) => {
    headers.set("Accept", "application/json");
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Data"],
  endpoints: (builder) => ({
    getData: builder.query<any, IGetDataArgs>({
      query: ({ url, params }) => ({
        url,
        method: "GET",
        params,
      }),
      providesTags: (_, __, { tag }) =>
        tag ? [{ type: "Data", id: tag }] : [],
    }),

    postData: builder.mutation<any, IPostDataArgs>({
      query: ({ url, data, options }) => ({
        url,
        method: "POST",
        body: data,
        ...options,
      }),
      invalidatesTags: (_, __, { invalidateTag }) =>
        invalidateTag ? [{ type: "Data", id: invalidateTag }] : [],
    }),

    updateData: builder.mutation<any, IUpdateDataArgs>({
      query: ({ url, data }) => ({
        url,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_, __, { invalidateTag }) =>
        invalidateTag ? [{ type: "Data", id: invalidateTag }] : [],
    }),

    deleteData: builder.mutation<any, IDeleteDataArgs>({
      query: ({ url, body }) => ({
        url,
        method: "DELETE",
        body,
      }),
      invalidatesTags: (_, __, { invalidates }) =>
        invalidates
          ? invalidates.map((tag: string) => ({ type: "Data", id: tag }))
          : [],
    }),
  }),
});

export const {
  useGetDataQuery,
  usePostDataMutation,
  useUpdateDataMutation,
  useDeleteDataMutation,
} = apiSlice;
