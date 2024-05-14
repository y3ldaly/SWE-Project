
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { commonApi } from "./commonApi";
import { BASE_URL, requestConfig } from "../../utils/util";

export const menuApi = commonApi.injectEndpoints({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        ...requestConfig, // Include the requestConfig in the baseQuery
    }),
    endpoints: (builder) => ({
        createMenu: builder.mutation({
            query: (data) => ({
                url: `menu`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Menu'],
        }),

        updateMenuItem: builder.mutation({
            query: (data, dishName) => ({
                url: `menu/${dishName}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Menu'],
        }),

        deleteMenuItem: builder.mutation({
            query: (dishName) => ({
                url: `menu/${dishName}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Menu'],
        }),

        listMenuItems: builder.query({
            query: () => `menu/menuItems`,
            providesTags: ['Menu'],
        }),

        getMenuItemDetails: builder.query({
            query: (dishName) => `menu/${dishName}`,
            providesTags: ['Menu'],
        }),
    }),
});

export const {
    useCreateMenuMutation,
    useUpdateMenuItemMutation,
    useDeleteMenuItemMutation,
    useListMenuItemsQuery,
    useGetMenuItemDetailsQuery,
} = menuApi;