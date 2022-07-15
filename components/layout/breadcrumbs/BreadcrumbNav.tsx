import React, { useEffect, useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

interface StructeredData {
  "@context" : string
  "@type": string
  itemListElement: CrumbSchema[]
}

type CrumbSchema = {
  '@type': string
  position: number
  name: string
  item: string
}


export default function BreadcrumbNav() {
  const [crumbSchema, setCrumbSchema] = useState<StructeredData>()
  const [crumbs, setCrumbs] = useState([{
    'text': 'home',
    'href': '/',
    'url': 'https://oak-tree.vercel.app/'
  }]);
    // Gives us ability to load the current route details
    const router = useRouter();

    useEffect(() => {
        generateBreadcrumbs();
        createStructeredDataSchema()
    },[])

    if(router.asPath === '/'){ 
        return null;
    }
    

    function generateBreadcrumbs() {
      // Remove any query parameters, as those aren't included in breadcrumbs
      const asPathWithoutQuery = router.asPath.split("?")[0];
      // Break down the path between "/"s, removing empty entities
      // Ex:"/my/nested/path" --> ["my", "nested", "path"]
      const asPathNestedRoutes = asPathWithoutQuery.split("/")
                                                   .filter(v => v.length > 0);
      // Iterate over the list of nested route parts and build
      // a "crumb" object for each one.
      const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        // We can get the partial nested route for the crumb
        // by joining together the path parts up to this point.
        const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
        // The title will just be the route string for now
        const text = subpath;
        return { href, text, url: `https://oak-tree.vercel.app${href}` }; 
      })
      setCrumbs([{ href: "/", text: "Home", url: "https://oak-tree.vercel.app/"}, ...crumblist]); 
    }

    const createStructeredDataSchema  = () => {

     
      let itemListElement:CrumbSchema[] = [];
        
      crumbs.map((crumb, index) => {
        const structure = {
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.text,
          "item": crumb.url
        }
        itemListElement.push(structure);
      })
      
      const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": itemListElement
      }

      setCrumbSchema(schema);
    }


    return (
      <>
            <nav aria-label="breadcrumb" className='breadcrumb-navigation'>
                    {crumbs.map((crumb, idx) => 
                        <Crumb crumb={crumb} key={idx} last={idx === crumbs.length - 1}/>
                    )}
            </nav>

            <script type="application/ld+json">
              {JSON.stringify(crumbSchema)}
            </script>
      </>
    );
  }

  const Crumb = ({crumb, last=false }:any) => {

    const {text, href} = crumb;
    let title = text;

    if(text.includes('-')) {
        title = text.split('-').join(' ')        
    }

    // The last crumb is rendered as normal text since we are already on the page
    if (last) {
      if(text.includes('#')) {
        title = text.split('#')[0]
        if(title.includes('-')) {
          title = title.split('-').join(' ')   
        }
      }
        return <p className='crumb'>{title}</p>
    }

    return (
        <> 
        <Link href={href}>
            <a className='crumb'>{title}</a>
        </Link>
        <p className='arrow'>{'>'}</p>
        </>
    )
  }