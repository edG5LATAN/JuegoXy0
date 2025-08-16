let tablero=[]
let turno=0

const btnPuslsar=(e,pos)=>{
  turno++
  //  console.log(e.target)
   let btn=e.target
   let color=turno % 2 ? 'red':'green'
   if(color =='red'){
     btn.innerHTML='X'
   }else{
    btn.innerHTML='0'
   }
   btn.style.backgroundColor = color
  //  console.log(pos)
  tablero[pos]=color
  // console.log(tablero)
  verificar(color)
}
const verificar=(color)=>{
  let variab
  if(color=='red'){
    variab='GANASTE CON EL COLOR ROJO'
  }else{
    variab='GANASTE CON EL COLOR VERDE'
  }
  if(tablero[0]==tablero[1]&&tablero[1]==tablero[2]&&tablero[0]){
    ganador1(`${color}`,variab)
    
  }
  else if(tablero[3]==tablero[4]&&tablero[4]==tablero[5]&&tablero[3]){
    ganador1(`${color}`,variab)

  }
  else if(tablero[6]==tablero[7]&&tablero[7]==tablero[8]&&tablero[6]){
    ganador1(`${color}`,variab)

  }
  else if(tablero[0]==tablero[3]&&tablero[3]==tablero[6]&&tablero[0]){
    ganador1(`${color}`,variab)

  }
  else if(tablero[1]==tablero[4]&&tablero[4]==tablero[7]&&tablero[1]){
    ganador1(`${color}`,variab)

  }
  else if(tablero[2]==tablero[5]&&tablero[5]==tablero[8]&&tablero[2]){
    ganador1(`${color}`,variab)

  }
  else if(tablero[0]==tablero[4]&&tablero[4]==tablero[8]&&tablero[0]){
    ganador1(`${color}`,variab)

  }
  else if(tablero[2]==tablero[4]&&tablero[4]==tablero[6]&&tablero[2]){
    ganador1(`${color}`,variab)

  }
}
const ganador=document.querySelector('.ganador')
function ganador1(win,variab){
  
  ganador.classList.toggle('mostrar')
  ganador.style.backgroundColor=win;
  ganador.innerHTML=`<h2 onclick="mostt()" class="btnX">X</h2>congratulation ${variab}`
  tablero=[]
  turno=0
}
document.querySelectorAll('button').forEach((obj,i)=>obj.addEventListener('click',(e)=> btnPuslsar(e,i)))

function mostt(){
  ganador.classList.toggle('mostrar')
  tablero=[]
  turno=0
  window.location.reload()
}