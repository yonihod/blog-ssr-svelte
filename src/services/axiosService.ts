import axios, {AxiosInstance} from "axios";

const WORDPRESS_API = "https://wp.yonihodeffi.dev/wp-json"
const WORDPRESS_API_VERSION = "/wp/v2"

export const wpAPI: AxiosInstance = axios.create({
    baseURL: `${WORDPRESS_API}${WORDPRESS_API_VERSION}`
});


/**
 * Set response interceptor
 */
wpAPI.interceptors.response.use((response) => response.data)