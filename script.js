const gameContainer=document.querySelector(".container");
const userResult=document.querySelector(".userResult img");
const computerResult=document.querySelector(".computerResult img");
const optionImages=document.querySelectorAll(".triangle img");
const result=document.querySelector(".outcome");
const triangleDOM=document.querySelector(".triangle");
const resultDOM=document.querySelector(".result")
const playAgainButton=document.querySelector(".playAgain");
const computerScore=document.querySelector(".computerScore h1");
const userScore=document.querySelector(".userScore h1");
const user=document.querySelector(".userResult");
const computer=document.querySelector(".computerResult");
const nextButton=document.querySelector("#next");
const gradientUser=document.querySelector(".gradientUser");
const gradientPC=document.querySelector(".gradientPC");

console.log(userResult,optionImages,result)

let uScore = localStorage.getItem('userScore') || 0;
let cScore = localStorage.getItem('computerScore') || 0;

function updateScore(){

    computerScore.innerHTML=localStorage.getItem("computerScore");
    userScore.innerHTML=localStorage.getItem("userScore");

    if(uScore>cScore)
        {
            console.log("hi")
            nextButton.style.display="inline";
        }
        else{
            nextButton.style.display="none";
        }
}

updateScore();


optionImages.forEach((img,index)=>{
    img.addEventListener("click",(e)=>{
        triangleDOM.style.display="none";
        resultDOM.style.display="flex";
        resultDOM.style.marginLeft="30%";
        console.log(e.target)
        let imgSource=e.target.src;
        console.log(imgSource)
        userResult.src=imgSource;
        console.log("img",userResult)

        let randomIndex=Math.floor(Math.random()*3);
        let computerImages=["./images/icons8-fist-67 1.png","./images/icons8-hand-64 1.png","./images/17911 1.png"]
        computerResult.src=computerImages[randomIndex];

        let computerValue=["R","P","S"][randomIndex];

        let userValue=["R","P","S"][index];

        console.log(computerValue,userValue)
        
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

        let outComeValue= outcomes[userValue+computerValue];
        

        if(outComeValue=="Cpu")
        {
            cScore++;
            gradientPC.className="gradientActive";
        }
        else if(outComeValue=="User")
        {
            uScore++;
            gradientUser.className="gradientActive";
        }

        
        result.innerHTML=userValue===computerValue? "TIE UP": outComeValue==="Cpu"? "YOU LOSE":"YOU WIN";
        
        if(outComeValue=="Draw")
        {
            playAgainButton.innerHTML="REPLAY";
        }
        localStorage.setItem("computerScore",cScore);
        localStorage.setItem("userScore",uScore);
        
        updateScore();
        
        
        
    })
})


if(uScore>cScore)
    {
        console.log("hi")
        nextButton.style.display="inline";
    }
    else{
        nextButton.style.display="none";
    }

playAgainButton.addEventListener("click",()=>{
    console.log("cicked")
    resultDOM.style.display="none";
    triangleDOM.style.display="block";
    gradientPC.className="gradient";
    gradientUser.className="gradient";
})