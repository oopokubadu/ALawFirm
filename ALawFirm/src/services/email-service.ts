import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emailService = createApi({
  reducerPath: "emailService",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://portals.nsano.com:7474",
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Access-Control-Allow-Headers', 'Content-Type');
      headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      return headers;
    },
    mode: 'no-cors', // Disable CORS (Note: This is not recommended for production)
  }),
  tagTypes: ["Email"],
  endpoints: (build) => ({
    sendEmail: build.mutation<any[], FormData>({
      query: (body: FormData) => ({
        url: "/sendmail",
        method: "POST",
        body: body,
        referrerPolicy: "unsafe-url"
      }),
      invalidatesTags: ["Email"],
    }),
  }),
});

export const { useSendEmailMutation } = emailService;
