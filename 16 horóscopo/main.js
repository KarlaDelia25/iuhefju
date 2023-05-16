let dia=document.querySelector("#dia")
let mes=document.querySelector("#mes")
let signo=document.querySelector("#signo")


dia.oninput=()=>{calcular()} 
mes.onchange=()=>{calcular()} 

const calcular=()=>{
  let vdia=parseInt(dia.value)
  let vmes=mes.value
  document.querySelector("#vdia").innerHTML=vdia
  document.querySelector("#vmes").innerHTML=vmes
  let s=""
  
  signo.innerHTML="<img src='spinner.gif' width='200px' height='100px'>";
    setTimeout(()=>{   
  
    
      if((dia>=20 && mes==Enero)||(dia<=18 && mes==Enero)){
        s.innerHTML="ACUARIO"
    }
    else if((dia>=19 && mes==2)||(dia<=20 && mes==3)){
        s.innerHTML="PISCIS"
    }
    else if((dia>=21 && mes==3)||(dia<=19 && mes==4)){
        s.innerHTML="ARIES"
    }
    else if((dia>=20 && mes==4)||(dia<=20 && mes==5)){
        s.innerHTML="TAURO"
    }
    else if((dia>=21 && mes==5)||(dia<=20 && mes==6)){
        s.innerHTML="GEMINIS"
    }
    else if((dia>=21 && mes==6)||(dia<=22 && mes==7)){
        s.innerHTML="CANCER"
    }
    else if((dia>=23 && mes==7)||(dia<=22 && mes==8)){
        s.innerHTML="LEO"
    }
    else if((dia>=23 && mes==8)||(dia<=22 && mes==9)){
        s.innerHTML="VIRGO"
    }
    else if((dia>=23 && mes==9)||(dia<=22 && mes==10)){
        s.innerHTML="LIBRA"
    }
    else if((dia>=23 && mes==10)||(dia<=21 && mes==11)){
        s.innerHTML="ESCORPIO"
    }
    else if((dia>=22 && mes==11)||(dia<=21 && mes==12)){
        s.innerHTML="SAGITARIO"
    }
    else if((dia>=22 && mes==12)||(dia<=19 && mes==1)){
        s.innerHTML="CAPRICORNIO"
    
    
    
    }
signo.innerHTML=`<div>
     <div><label>${vdia} de ${vmes}</label></div>
     <div><label>${s}</label></div>
     </div>`
	
     
},2000);
}