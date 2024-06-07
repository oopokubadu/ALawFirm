import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emailService = createApi({
  reducerPath: "emailService",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://theeightgeeks.com`,
  }),
  tagTypes: ["Email"],
  endpoints: (build) => ({
    sendEmail: build.mutation<any[], FormData>({
      query: (body: FormData) => ({
        url: "/contactus.php",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Email"],
    }),
  }),
});

export const { useSendEmailMutation } = emailService;
