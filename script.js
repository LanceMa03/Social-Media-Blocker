const generateHTML =  (websiteName) => {

    return ` 
    
  

    <body>

    <div style = "display: flex; align-items:center; justify-content:center;" class = "title">

    <h1 style = "color:red; font-size:64px;"> GET BACK TO STUDYING! NO SOCIAL MEDIA! </h1>

   </div>


   <div style = "display: flex;  align-items:center; justify-content:center" class = "vid">

   
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cnrxJtJcSew?start=91&autoplay=1&showinfo=0&controls=0&loop=1"   
    allow="autoplay;" frameborder="0" allowfullscreen></iframe>

    </div>

    
    </body>

    `;
};


switch (window.location.hostname) {


    case "www.youtube.com":
        document.body.innerHTML = generateHTML("Youtube");
        break;
    
    case "www.twitter.com":
        document.body.innerHTML = generateHTML("Twitter");
        break;

    case "www.facebook.com":
        document.body.innerHTML = generateHTML("Facebook");
        break;
    
    case "www.instagram.com":
        document.body.innerHTML = generateHTML("Instagram");
        break;

    case "www.tiktok.com":
        document.body.innerHTML = generateHTML("Tiktok");
        break;

   
}

