import React from 'react';
import * as fs from 'fs'

import { getAllProducts } from '../lib/shopify';

const BASE_URL = 'https://dev.oaktreemobility.co.uk';

const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.ts",
        "_app.tsx",
        "_document.ts",
        "_document.tsx",
        "404.tsx",
        "sitemap.xml.ts",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });


const createSitemap = (products:any) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPaths
        .map((url) => {
          return `
            <url>
              <loc>${url.split('.tsx').join('')}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
        ${products
          .map((product:any) => {
            return `
                <url>
                    <loc>${`${BASE_URL}/${product.type}/the-${product.name}`}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>
            `;
          })
          .join('')}
    </urlset>
    `;

    class Sitemap extends React.Component {
        static async getInitialProps({ res }:any) {
          const products = await getAllProducts();
          
          const productArray = products.map((product:any) => {return {'name': product.node.handle, 'type': product.node.productType.value.toLowerCase().split(' ').join('-') + 's'}})
            
          console.log(productArray[0].name);

          res.setHeader('Content-Type', 'text/xml');
          res.write(createSitemap(productArray));
          res.end();
        }
      }
      
      export default Sitemap;