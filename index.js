let tablero = []
let turno = 0
let juegoTerminado = false

const btnPulsar = (e, pos) => {
  // Verificar si el juego ha terminado o si la casilla ya está ocupada
  if (juegoTerminado) return
  
  let btn = e.target
  
  // Verificar si el botón ya tiene contenido (X o 0)
  if (btn.innerHTML !== '1' && btn.innerHTML !== '2' && btn.innerHTML !== '3' && 
      btn.innerHTML !== '4' && btn.innerHTML !== '5' && btn.innerHTML !== '6' && 
      btn.innerHTML !== '7' && btn.innerHTML !== '8' && btn.innerHTML !== '9') {
    return // Si ya tiene X o 0, no hacer nada
  }
  
  turno++
  
  // Remover el event listener temporalmente para evitar doble click durante la ejecución
  btn.removeEventListener('click', (e) => btnPulsar(e, pos))
  
  let color = turno % 2 ? 'red' : 'green'
  if (color == 'red') {
    btn.innerHTML = 'X'
  } else {
    btn.innerHTML = '0'
  }
  btn.style.backgroundColor = color
  btn.style.color="white";
  btn.disabled = true // Deshabilitar el botón
  
  tablero[pos] = color
  verificar(color)
  
  // Verificar si hay empate (todas las casillas llenas y sin ganador)
  if (turno === 9 && !juegoTerminado) {
    ganador.innerHTML = '<h2 onclick="mostt()" class="btnX">X</h2>EMPATE!'
    ganador.classList.toggle('mostrar')
    ganador.classList.toggle('background-grey')
    juegoTerminado = true
  }
}

const verificar = (color) => {
  let variab
  if (color == 'red') {
    variab = 'GANASTE CON EL COLOR ROJO'
  } else {
    variab = 'GANASTE CON EL COLOR VERDE'
  }
  
  if (tablero[0] == tablero[1] && tablero[1] == tablero[2] && tablero[0]) {
    ganador1(`${color}`, variab)
  } else if (tablero[3] == tablero[4] && tablero[4] == tablero[5] && tablero[3]) {
    ganador1(`${color}`, variab)
  } else if (tablero[6] == tablero[7] && tablero[7] == tablero[8] && tablero[6]) {
    ganador1(`${color}`, variab)
  } else if (tablero[0] == tablero[3] && tablero[3] == tablero[6] && tablero[0]) {
    ganador1(`${color}`, variab)
  } else if (tablero[1] == tablero[4] && tablero[4] == tablero[7] && tablero[1]) {
    ganador1(`${color}`, variab)
  } else if (tablero[2] == tablero[5] && tablero[5] == tablero[8] && tablero[2]) {
    ganador1(`${color}`, variab)
  } else if (tablero[0] == tablero[4] && tablero[4] == tablero[8] && tablero[0]) {
    ganador1(`${color}`, variab)
  } else if (tablero[2] == tablero[4] && tablero[4] == tablero[6] && tablero[2]) {
    ganador1(`${color}`, variab)
  }
}

const ganador = document.querySelector('.ganador')

function ganador1(win, variab) {
  ganador.classList.toggle('mostrar')
  ganador.style.backgroundColor = win
  ganador.innerHTML = `<h2 onclick="mostt()" class="btnX">X</h2>congratulation ${variab}`
  tablero = []
  turno = 0
  juegoTerminado = true
}

// Asignar event listeners a los botones
document.querySelectorAll('.btn').forEach((obj, i) => {
  obj.addEventListener('click', (e) => btnPulsar(e, i))
})

function mostt() {
  ganador.classList.toggle('mostrar')
  resetearPagina()
}
// boton de reseteo
const reset = document.querySelector('.btn_reset')
reset.addEventListener('click', () => resetearPagina())

function resetearPagina() {
  window.location.reload()
}