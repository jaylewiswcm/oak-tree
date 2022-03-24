import React from 'react'
import Link from 'next/link';

interface ComponentProps {
    pageTitle: string;
}

export const PageUnderConstruction = ({pageTitle}:ComponentProps) => {
  return (
    <div className='page-construction'>
        <h1>{pageTitle}</h1>
        <p>This page is currently under contruction. Take a look at these pages</p>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/request-our-chair-brochure"><a>Request a Brochure</a></Link></li>
            <li><Link href="/chairs"><a>Chair Collection</a></Link></li>
        </ul>
    </div>
  )
}
