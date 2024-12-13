        let btn=document.querySelectorAll(".button");
        let inp=document.querySelector(".inp")

        btn.forEach((button)=>{
            button.addEventListener("click",(event)=>{
                
                if(button.value == "AC"){
                    inp.value = ' ';
                }
                else if(button.value == "DE"){
                    inp.value = inp.value.toString().slice(0,-1);
                }
                else if(button.value == "="){
                    inp.value = eval(inp.value);
                }
                else{
                    inp.value += button.value;
                }
            })
        })

        
       
        
