adviceButton.addEventListener("click", getAdvice);
function getAdvice(){
  fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
      adviceID.innerText = data.slip.id; 
      advices.innerText = `${data.slip.advice}`; 
      
    });

  }


 
 