import React from 'react';
import ReactDOM from 'react-dom';
import Script from "next/script";

function setupLandbot() {
  new Landbot.Livechat({
    configUrl: "https://landbot.site/v3/H-1287554-ERN15ILZVGW2Q9ZH/index.json"
  });
  // const div = React.createElement('div', {class: 'bg'}, '');

  // ReactDOM.render(div,
  //   document.querySelector('.kAfRMA'))
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



