
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { commonApi } from './commonApi';
import {BASE_URL, requestConfig} from "../../utils/util";

export const orderApi = commonApi.injectEndpoints({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        ...requestConfig, // Include the requestConfig in the baseQuery
    }),
    endpoints: (builder) => ({
        placeOrder: builder.mutation({
            query: (data) => ({
                url: `orders/placeOrder`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Orders'],
        }),

        cancelOrder: builder.mutation({
            query: (orderId) => ({
                url: `orders/cancelOrder/${orderId}`,
                method: 'POST',
            }),
            invalidatesTags: ['Orders'],
        }),

        getOrderDetails: builder.query({
            query: (orderId) => `orders/getOrderDetails/${orderId}`,
            providesTags: ['Orders'],
        }),

        makeDeposit: builder.mutation({
            query: (data) => ({
                url: `orders/makeDeposit`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Orders'],
        }),

        listOrders: builder.query({
            query: () => `orders/getOrders`,
            providesTags: ['Orders'],
        }),

        takeOrder: builder.mutation({
            query: (orderId) => ({
                url: `orders/takeOrder/${orderId}`,
                method: 'PUT',
            }),
            invalidatesTags: ['Orders'],
        }),

        deleteOrder: builder.mutation({
            query: (orderId) => ({
                url: `orders/deleteOrder/${orderId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Orders'],
        }),

    }),
});

export const {
    usePlaceOrderMutation,
    useCancelOrderMutation,
    useGetOrderDetailsQuery,
    useMakeDepositMutation,
    useListOrdersQuery,
    useTakeOrderMutation,
    useDeleteOrderMutation,
} = orderApi;