import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React from 'react';


export default function BreadcrumbNav() {
    // Gives us ability to load the current route details
    const router = useRouter();

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
        return { href, text }; 
      })
  
      // Add in a default "Home" crumb for the top-level
      return [{ href: "/", text: "Home" }, ...crumblist];
    }
  
    // Call the function to generate the breadcrumbs list
    const breadcrumbs = generateBreadcrumbs();
  
    return (
        // <Breadcrumbs aria-label="breadcrumb">
        //     {breadcrumbs.map((crumb, idx) => (
        //     <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
        //     ))}
        // </Breadcrumbs>
            <nav aria-label="breadcrumb" className='breadcrumb-navigation'>
                    {breadcrumbs.map((crumb, idx) => 
                        <Crumb crumb={crumb} key={idx} last={idx === breadcrumbs.length - 1}/>
                    )}
            </nav>
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

// // Each individual "crumb" in the breadcrumbs list
// function Crumb({ text, href, last=false }:any) {
//   // The last crumb is rendered as normal text since we are already on the page
//   if (last) {
//     return <Typography color="text.primary">{text}</Typography>
//   }

//   // All other crumbs will be rendered as links that can be visited 
//   return (
//     <Link underline="hover" color="inherit" href={href}>
//       {text}
//     </Link>
//   );
// }