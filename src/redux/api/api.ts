import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todos"],
  endpoints: (build) => ({
    getTodos: build.query({
      query: (priority) => ({
        url: "/todos",
        method: "GET",
        params: { priority },
      }),
      providesTags: ["todos"],
    }),
    addTodos: build.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["todos"],
    }),
    updateTodos: build.mutation({
      query: (option) => ({
        url: `/todos/${option.id}`,
        method: "PATCH",
        body: option.data,
      }),
      invalidatesTags: ["todos"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery, useAddTodosMutation,useUpdateTodosMutation } = baseApi;
