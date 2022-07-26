
import * as fs from 'fs'

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

    export default staticPaths;