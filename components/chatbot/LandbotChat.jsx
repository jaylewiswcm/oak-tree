import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import Script from "next/script";

function setupLandbot() {
 const LiveChat = new Landbot.Livechat({
    configUrl: "https://landbot.site/v3/H-1287554-ERN15ILZVGW2Q9ZH/index.json"
  });
}

export default function LandbotChat() {
  return (
    <div className=''>
      {/* <Head>
        <script type='text/javascript' src='https://static.landbot.io/landbot-3/landbot-3.0.0.js'  onLoad={setupLandbot}/>
      </Head> */}
      <Script
        strategy="lazyOnload"
        src="https://static.landbot.io/landbot-3/landbot-3.0.0.js"
        onLoad={setupLandbot}
      />
    </div>
  );
}



