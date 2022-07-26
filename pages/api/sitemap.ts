import React from 'react';
import * as fs from 'fs'

import { getAllProducts } from "../../lib/shopify"

const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        ".DS_Store",
        "api",
        "_app.tsx",
        "_document.tsx",
        "404.ts",
        "sitemap.xml.ts",
        "sitemap.xml",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      let path = staticPagePath;

      if(staticPagePath.includes('.tsx')) {
          path = staticPagePath.split('.tsx').join('')
      }
      return `https://dev.oaktreemobility.co.uk/${path}`;
    });


export default async function handler(req:any, res:any) {

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml')
    
  // Instructing the Vercel edge to cache the file
  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

  const BASE_URL = 'https://dev.oaktreemobility.co.uk';

    const products = await getAllProducts() // Get all products

    let productArray:Array<string> = [];

    // Map through products and create URL
    products.map((product:any) => { 
       
        const productType = product.node.productType.value.toLowerCase().split(" ").join("-");
        const productName = product.node.handle;
    
        productArray.push(`${BASE_URL}/${productType}s/${productName}`)
      })

    // Combine static and dynamic paths
    const allPaths = [ ...staticPaths, ...productArray];

    // Create sitemap
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

res.end(sitemap)

};


