import { wpAPI } from "./axiosService";

export const getPosts = () : Promise<Array<Post>> => wpAPI.get("/posts");

export const getPostById = (id: number) : Promise<Post> => {
    console.log("getting post with id", id);
    return wpAPI.get(`/posts/${id}`)
}

export const getUserById = (id: number) => wpAPI.get(`/users${id}`)

export const getComments = (id: number) => wpAPI.get(`/comments/`)

export const getPostTag = (id: number) => wpAPI.get(`/tags?post=${id}`)