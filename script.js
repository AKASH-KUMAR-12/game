const gameContainer=document.querySelector(".container");
const userResult=document.querySelector(".userResult img");
const pcResult=document.querySelector(".pcResult img");
const optionImages=document.querySelectorAll(".triangle img");

console.log(userResult,pcResult,optionImages)

optionImages.forEach((img,index)=>{
    img.addEventListener("click",(e)=>{
        console.log(e.target)
        let imgSource=e.target.src;
        console.log(imgSource)
        userResult.src=imgSource;
        console.log("img",userResult)

        let randomIndex=Math.floor(Math.random()*3);
        let pcImages=["./images/icons8-fist-67 1.png","./images/icons8-hand-64 1.png","./images/17911 1.png"]
        pcResult.src=pcImages[randomIndex];

        let pcValue=["R","P","S"][randomIndex];

        let userValue=["R","P","S"][index];

        console.log(pcValue,userValue)

        let outcomes={
            RR : "Draw",
            RP : "Cpu",
            RS : "User",
            PP : "Draw",
            PR : "User",
            PS : "Cpu",
            SS : "Draw",
            SR : "Cpu",
            SP : "User"
        };

        let outComeValue= outcomes[userValue+pcValue];
        console.log(outComeValue)
    })
})