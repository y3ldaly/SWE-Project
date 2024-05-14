import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, requestConfig } from "../../utils/util";

export const commonApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        // if endpoint is cover image or gallery image then remove content type
        prepareHeaders: (headers, { getState }, api) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            //headers.set('Content-Type', 'application/json');
            return headers;
        },
        ...requestConfig,
    }),
    tagTypes: [ 'Auth', 'Suppliers', 'Products', 'Orders' ],
    endpoints: _ => ({}),
});