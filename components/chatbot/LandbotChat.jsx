import Script from "next/script";

function setupLandbot() {
//   fetch('https://landbot.site/v3/H-1287554-ERN15ILZVGW2Q9ZH/index.json', {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));
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



