import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emailService = createApi({
  reducerPath: "emailService",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://portals.nsano.com:7474",
  }),
  tagTypes: ["Email"],
  endpoints: (build) => ({
    sendEmail: build.mutation<any[], FormData>({
      query: (body: FormData) => ({
        url: "/sendmail",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Email"],
    }),
  }),
});

export const { useSendEmailMutation } = emailService;
