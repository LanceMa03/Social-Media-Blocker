const generateHTML0 =  (websiteName) => {

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

const generateHTML1 =  (websiteName) => {

    return ` 
    
    <body>

    <div style = "display: flex; align-items:center; justify-content:center;" class = "title">

    <h1 style = "color:red; font-size:64px;"> GET BACK TO STUDYING! NO SOCIAL MEDIA! </h1>

   </div>

   <div style = "display: flex;  align-items:center; justify-content:center" class = "vid">
   
    <iframe width="560" height="315" src="https://www.youtube.com/embed/iJAxeafvn8Y?autoplay=1&showinfo=0&controls=0&loop=1"   
    allow="autoplay;" frameborder="0" allowfullscreen></iframe>

    </div>

    </body>
    `;
};

const generateHTML2 =  (websiteName) => {

    return ` 
    
    <body>

    <div style = "display: flex; align-items:center; justify-content:center;" class = "title">

    <h1 style = "color:red; font-size:64px;"> GET BACK TO STUDYING! NO SOCIAL MEDIA! </h1>

   </div>

   <div style = "display: flex;  align-items:center; justify-content:center" class = "vid">
   
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YG4iTGjuoKw?start=61&autoplay=1&showinfo=0&controls=0&loop=1"   
    allow="autoplay;" frameborder="0" allowfullscreen></iframe>

    </div>

    </body>
    `;
};


function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

switch (window.location.hostname) {


    case "www.youtube.com":

        var randNum = getRandomNumber(3)
        console.log(randNum);

        if (randNum == 0) {
            document.body.innerHTML = generateHTML0("Youtube");
            break;
        }
        else if (randNum == 1) {
            document.body.innerHTML = generateHTML1("Youtube");
            break;
        }
        else if (randNum == 2) {
            document.body.innerHTML = generateHTML2("Youtube");
            break;
        }

    
    case "www.twitter.com":
        var randNum = getRandomNumber(3)
        console.log(randNum);

        if (randNum == 0) {
            document.body.innerHTML = generateHTML0("Youtube");
            break;
        }
        else if (randNum == 1) {
            document.body.innerHTML = generateHTML1("Youtube");
            break;
        }
        else if (randNum == 2) {
            document.body.innerHTML = generateHTML2("Youtube");
            break;
        }

    case "www.facebook.com":
        var randNum = getRandomNumber(3)
        console.log(randNum);

        if (randNum == 0) {
            document.body.innerHTML = generateHTML0("Youtube");
            break;
        }
        else if (randNum == 1) {
            document.body.innerHTML = generateHTML1("Youtube");
            break;
        }
        else if (randNum == 2) {
            document.body.innerHTML = generateHTML2("Youtube");
            break;
        }
    
    case "www.instagram.com":
        var randNum = getRandomNumber(3)
        console.log(randNum);

        if (randNum == 0) {
            document.body.innerHTML = generateHTML0("Youtube");
            break;
        }
        else if (randNum == 1) {
            document.body.innerHTML = generateHTML1("Youtube");
            break;
        }
        else if (randNum == 2) {
            document.body.innerHTML = generateHTML2("Youtube");
            break;
        }

    case "www.tiktok.com":
        var randNum = getRandomNumber(3)
        console.log(randNum);

        if (randNum == 0) {
            document.body.innerHTML = generateHTML0("Youtube");
            break;
        }
        else if (randNum == 1) {
            document.body.innerHTML = generateHTML1("Youtube");
            break;
        }
        else if (randNum == 2) {
            document.body.innerHTML = generateHTML2("Youtube");
            break;
        }
    
    case "www.reddit.com":
        var randNum = getRandomNumber(3)
        console.log(randNum);

        if (randNum == 0) {
            document.body.innerHTML = generateHTML0("Youtube");
            break;
        }
        else if (randNum == 1) {
            document.body.innerHTML = generateHTML1("Youtube");
            break;
        }
        else if (randNum == 2) {
            document.body.innerHTML = generateHTML2("Youtube");
            break;
        }

   
}

