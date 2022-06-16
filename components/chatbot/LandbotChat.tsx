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


import Link from "next/link";
import Script from "next/script";

let Landbot: any;
function setupLandbot() {
  new Landbot.Livechat({
    configUrl: "https://chats.landbot.io/v3/H-952577-YPA4M1ZCL831U2UN/index.json"
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


{/* <script>
window.addEventListener('mouseover', initLandbot, { once: true });
window.addEventListener('touchstart', initLandbot, { once: true });
var myLandbot;
function initLandbot() {
  if (!myLandbot) {
    var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
    s.addEventListener('load', function() {
      var myLandbot = new Landbot.Livechat({
        configUrl: 'https://chats.landbot.io/v3/H-952577-YPA4M1ZCL831U2UN/index.json',
      });
    });
    s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
}
</script> */}