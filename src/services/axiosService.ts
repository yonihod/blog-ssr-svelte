import axios, {AxiosInstance} from 'axios';
// import config from "../variables";
// const {wp_rest_api, wp_rest_api_version, wp_graphql_api } = config;

const wp_rest_api = "https://wp.yonihodeffi.dev/wp-json";
const wp_rest_api_version = "/wp/v2";
const wp_graphql_api = "https://wp.yonihodeffi.dev/graphql";


export const wpRestAPI: AxiosInstance = axios.create({
    baseURL: `${wp_rest_api}${wp_rest_api_version}`
});

export const wpGraphqlAPI: AxiosInstance = axios.create({
    baseURL: wp_graphql_api as string
})


/**
 * Set response interceptor
 */
 wpRestAPI.interceptors.response.use((response) => response.data)
 wpGraphqlAPI.interceptors.response.use((response) => response.data)