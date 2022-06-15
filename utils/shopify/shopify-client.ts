import Client from "shopify-buy";

const domain = process.env.SHOPIFY_API_ENDPOINT;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API_TOKEN;

export const client = Client.buildClient({  
    domain : 'oak-tree-mobility.myshopify.com',
    storefrontAccessToken:  storefrontAccessToken!
})