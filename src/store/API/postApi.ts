import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface IPost {
  main_text: string;
  user_id: number;
  id: number;
  reg_date: string;
  user_fk: {
    user_city: string;
    phone_number: number;
    reg_date: string;
    email: string;
    id: number;
    name: string;
    password: string;
  };
  photos: string[];
  comments: string[];
}
interface IGetAllPostsResponse {
  status: number;
  message: IPost[];
}
interface IGetPostByIdResponse {
  status: number;
  message: IPost;
}
interface IAddNewPostPayload  {
  main_text: string;
  user_id: number;
  // photos: string[];
}
interface IAddNewPostResponse {
  status: number;
  post_id: number;
}
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<IGetAllPostsResponse, null>({
      query: () => "/post",
    }),
    getPostById: builder.query<IGetPostByIdResponse, string>({
      query: (postId) => `/post?post_id=${postId}`,
    }),
    addNewPost: builder.mutation<IAddNewPostResponse,IAddNewPostPayload>({
      query: (payloud)=>({
        url: "/post",
        method: "POST",
        body: payloud,
      })
    })
  }),
});

export const {
  useGetAllPostsQuery,
  useLazyGetAllPostsQuery,
  useLazyGetPostByIdQuery,
} = postApi;
