interface config {
    wp_rest_api: string | boolean,
    wp_rest_api_version: string | boolean,
    wp_graphql_api: string | boolean
}

const config: config =  {
    wp_rest_api: import.meta.env.VITE_WORDPRESS_REST_API,
    wp_rest_api_version: import.meta.env.VITE_WORDPRESS_REST_API_VERSION,
    wp_graphql_api: import.meta.env.VITE_WORDPRESS_GRAPHQL_API
};

export default config;