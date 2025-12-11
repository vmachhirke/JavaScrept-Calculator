const displayValue = document.querySelector("#display-Numbre");
const buttons = document.querySelectorAll("button");
let string = '';
 let buttonArray=Array.from(buttons);
 console.log(buttonArray);
buttonArray.forEach(btn => {
    btn.addEventListener("click",(e)=>{

        if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            displayValue.value=string;
        }else if(e.target.innerHTML=="AC"){
           string="";
            displayValue.value=string;
        }else if(e.target.innerHTML=="="){
            string=eval(string);
             displayValue.value=string;
        }else{
            string+=e.target.innerHTML;
            displayValue.value=string;
        };
      // console.log(e.target.innerHTML)
    });
});
