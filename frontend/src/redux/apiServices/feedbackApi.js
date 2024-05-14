
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { commonApi } from './commonApi';
import { BASE_URL, requestConfig } from "../../utils/util";
export const feedbackApi = commonApi.injectEndpoints({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        ...requestConfig, // Include the requestConfig in the baseQuery
    }),
    endpoints: (builder) => ({
        submitCustomerFeedback: builder.mutation({
            query: (data) => ({
                url: `feedback/customer/${data.orderId}`,
                method: 'POST',
                body: data
            }),
            providesTags: ['Feedback'],
        }),

        submitDeliveryFeedback: builder.mutation({
            query: (data) => ({
                url: `feedback/delivery/${data.orderId}`,
                method: 'POST',
                body: data
            }),
            providesTags: ['Feedback'],
        }),

        submitChefFeedback: builder.mutation({
            query: (data) => ({
                url: `feedback/chef/importer`,
                method: 'POST',
                body: data
            }),
            providesTags: ['Feedback'],
        }),

        rateMenuItem: builder.mutation({
            query: (data) => ({
                url: `feedback/rateMenu`,
                method: 'POST',
                body: data
            }),
            providesTags: ['Feedback'],
        }),

        respondToFeedback: builder.mutation({
            query: (data) => ({
                url: `feedback/respondToFeedback`,
                method: 'POST',
                body: data
            }),
            providesTags: ['Feedback'],
        }),

        listFeedback: builder.query({
            query: () => `feedback/list-feedback`,
            providesTags: ['Feedback'],
        }),

        submitForumPost: builder.mutation({
            query: (data) => ({
                url: `feedback/forum`,
                method: 'POST',
                body: data
            }),
            providesTags: ['Feedback'],
        }),

        getForumPosts: builder.query({
            query: () => `feedback/forum`,
            providesTags: ['Feedback'],
        }),
    }),
});

export const {
    useSubmitCustomerFeedbackMutation,
    useSubmitDeliveryFeedbackMutation,
    useSubmitChefFeedbackMutation,
    useRateMenuItemMutation,
    useRespondToFeedbackMutation,
    useListFeedbackQuery,
    useSubmitForumPostMutation,
    useGetForumPostsQuery,
} = feedbackApi;