
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { commonApi } from './commonApi';
import {BASE_URL, requestConfig} from "../../utils/util";

export const userApi = commonApi.injectEndpoints({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        ...requestConfig, // Include the requestConfig in the baseQuery
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: `users/register`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Users'],
        }),

        login: builder.mutation({
            query: (data) => ({
                url: `users/login`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Users'],
        }),
        updateProfile: builder.mutation({
            query: (data) => ({
                url: `users/updateProfile`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Users'],
        }),

        deactivate: builder.mutation({
            query: () => ({
                url: `users/deactivate`,
                method: 'PUT',
            }),
            invalidatesTags: ['Users'],
        }),

        getUserDetails: builder.query({
            query: () => `users/userDetails`,
            providesTags: ['Users'],
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useUpdateProfileMutation,
    useDeactivateMutation,
    useGetUserDetailsQuery,
} = userApi;