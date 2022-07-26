import React from 'react';

import { getAllProducts } from '../lib/shopify';

const BASE_URL = 'https://dev.oaktreemobility.co.uk';

const createSitemap = (products:any) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${products
          .map((product:any) => {
            return `
                <url>
                    <loc>${`${BASE_URL}/${product.type}/the-${product.name}`}</loc>
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