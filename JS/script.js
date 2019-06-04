const information = () =>{
  const body = ["shoulder","hand","knee","arm","leg","foot"]
  const events =[]


  for (let i=0; i<body.length;i++){
    events[i] = document.getElementsByClassName(body[i])
    
    events[i][0].addEventListener("mouseover",()=>{
      // events[i][1].removeAttribute("style")
      events[i][1].style="display:block"

    })
    events[i][0].addEventListener("mouseleave",()=>{
      events[i][1].style="display:none"
      
    })
  }
}

information()
