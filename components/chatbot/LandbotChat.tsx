// import React, { useRef, useEffect } from "react";

// export default function LandbotChat({ url }: any) {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const _landbot = new Landbot.Container({
//       container: containerRef.current,
//       configUrl: url
//     });

//     return () => _landbot.destroy();
//   }, [url, containerRef]);

//   return <div className="MyLandbot" ref={containerRef} />;
// }
// import React from 'react';
// import Script from "next/script";

// function setupLandbot() {
//   let Landbot: any;
//   new Landbot.Livechat({
//     configUrl: "https://chats.landbot.io/v3/H-952577-YPA4M1ZCL831U2UN/index.json"
//   });
// }

// export default function LandbotChat() {
//   return (
//     <div className='chatbot'>
//       <Script
//         strategy="lazyOnload"
//         src="https://static.landbot.io/landbot-3/landbot-3.0.0.js"
//         onLoad={setupLandbot}
//       />
//     </div>
//   );
// }

// import Link from "next/link";
// import Script from "next/script";

// function setupLandbot() {
//   new Landbot.Livechat({
//     configUrl: "https://landbot.site/v3/H-1287554-ERN15ILZVGW2Q9ZH/index.json"
//   });
// }

// export default function LandbotChat() {
//   return (
//     <div className='chatbot'>
//       <Script
//         strategy="lazyOnload"
//         src="https://static.landbot.io/landbot-3/landbot-3.0.0.js"
//         onLoad={setupLandbot}
//       />
//     </div>
//   );
// }


import Link from "next/link";
import Script from "next/script";

function setupLandbot() {
  new Landbot.Livechat({
    configUrl: "https://landbot.site/v3/H-1287554-ERN15ILZVGW2Q9ZH/index.json"
  });
}

export default function LandbotChat() {
  return (
    <div className='chatbot'>
      <Script
        strategy="lazyOnload"
        src="https://static.landbot.io/landbot-3/landbot-3.0.0.js"
        onLoad={setupLandbot}
      />
    </div>
  );
}


