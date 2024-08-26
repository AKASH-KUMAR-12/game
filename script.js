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
const ruleBtn=document.querySelector(".btn button");
const rules=document.querySelector(".rules");
const cross=document.querySelector(".image");
const againstPc=document.querySelector("#againstPc");
console.log(userResult,optionImages,result)

let uScore = parseInt(localStorage.getItem('userScore')) || 0;
let cScore = parseInt(localStorage.getItem('computerScore')) || 0;

function updateScore(){
   console.log(localStorage.getItem("userScore"))
   if(localStorage.getItem("userScore")==null)
   {
      userScore.innerHTML=0;
   }
   else{

       userScore.innerHTML=parseInt(localStorage.getItem("userScore"));
   }
   if(localStorage.getItem("computerScore")==null)
    {
       computerScore.innerHTML=0;
    }
    else{

        computerScore.innerHTML=parseInt(localStorage.getItem("computerScore"));
    }
}

updateScore();


optionImages.forEach((img,index)=>{
    img.addEventListener("click",(e)=>{
        triangleDOM.style.display="none";
        resultDOM.style.display="flex";
        resultDOM.style.marginLeft="30%";
    
        let imgSource=e.target.src;
     
        userResult.src=imgSource;


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
            nextButton.style.display="none";
        }
        else if(outComeValue=="User")
        {
            uScore++;
            gradientUser.className="gradientActive";
            nextButton.style.display="inline";
        }
        else{
            nextButton.style.display="none";
        }

        if(userValue=="R")
        {   
        user.style.border="15px solid #0074B6";
        }
        else if(userValue=="P")
        {
            user.style.border="15px solid #FFA943";
        }
        else{
            user.style.border="15px solid #BD00FF";
        }

        if(computerValue=="R")
            {   
            computer.style.border="15px solid #0074B6";
            }
            else if(computerValue=="P")
            {
                computer.style.border="15px solid #FFA943";
            }
            else{
                computer.style.border="15px solid #BD00FF";
            }
    
        
        result.innerHTML=userValue===computerValue? "TIE UP": outComeValue==="Cpu"? "YOU LOST":"YOU WIN";
        
        if(outComeValue=="Draw")
        {
            playAgainButton.innerHTML="REPLAY";
            againstPc.style.display="none";
        }
        else{
            playAgainButton.innerHTML="PLAY AGAIN";
            againstPc.style.display="inline";
        }



        localStorage.setItem("computerScore",cScore);
        localStorage.setItem("userScore",uScore);
        
        updateScore();
        
        
        
    })
})


playAgainButton.addEventListener("click",()=>{
    console.log("cicked")
    resultDOM.style.display="none";
    triangleDOM.style.display="block";
    gradientPC.className="gradient";
    gradientUser.className="gradient";
})

ruleBtn.addEventListener("click",()=>{
    rules.style.display="flex";
}
)
cross.addEventListener("click",()=>{
    rules.style.display="none";
}
)
