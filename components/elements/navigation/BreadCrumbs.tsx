import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const convertBreadcrumb = string => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
};

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/'); // Take the pathname and split by the '/' into an array
      linkPath.shift(); // Remove first entry of array - this will be the blank
      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') }; // return breadcrumb path eg 'rise-and-recline' and link eg '/rise-and-recline'
      });
      setBreadcrumbs(pathArray); // Pass the path array to the state
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <div className="container-regular">
        <nav aria-label="breadcrumbs" className="breadcrumb-navigation">
            <ol className="breadcrumb">
                <li>
                <a href="/">Home</a>
                </li>
                {breadcrumbs.map((breadcrumb, i) => {
                return (
                    <li key={breadcrumb.href}>
                    <Link href={breadcrumb.href}>
                    
                            { i + 1 === breadcrumbs.length ?
                                <p>{convertBreadcrumb(breadcrumb.breadcrumb)}</p> :
                                <a>{convertBreadcrumb(breadcrumb.breadcrumb)} </a>
                            }
                    </Link>
                    </li>
                );
                })}
            </ol>
        </nav>
    </div>
  );
};

export default Breadcrumbs;