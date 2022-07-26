import React from 'react';
import { getAllProducts } from "./lib/shopify"
import staticPaths from './utils/sitemap/readingfile';
// import dynamicPaths from '../utils/sitemap/dynamicpath';

const Sitemap = () => {
    return null;
};


export const getServerSideProps = async ({ res }:any) => {
    const BASE_URL = 'https://dev.oaktreemobility.co.uk';

    const products = await getAllProducts() // some remote API call maybe!

    let productArray:Array<string> = [];
  
    products.map((product:any) => {
       
        const productType = product.node.productType.value.toLowerCase().split(" ").join("-");
        const productName = product.node.handle;
    
        productArray.push(`${BASE_URL}/${productType}s/${productName}`)
      })


    const allPaths = [ ...staticPaths, ...productArray];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;

