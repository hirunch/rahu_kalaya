
document.getElementById("mon").onclick = function(){

  document.getElementById("monR").textContent = ' 07:30 - 09:00';
}


document.getElementById("tue").onclick = function(){

  document.getElementById("tueR").textContent = ' 03:00 - 04:30';
}

document.getElementById("wen").onclick = function(){

  document.getElementById("wenR").textContent = ' 12:00 - 01:30';
}

document.getElementById("thr").onclick = function(){

  document.getElementById("thrR").textContent = ' 01:30 - 03:00';
}

document.getElementById("fri").onclick = function(){

  document.getElementById("friR").textContent = ' 10:30 - 12:00';
}

document.getElementById("sat").onclick = function(){

  document.getElementById("satR").textContent = ' 09:00 - 10:30';
}

document.getElementById("sun").onclick = function(){

  document.getElementById("sunR").textContent = ' 04:30 - 06:00';
}


document.getElementById("clr").onclick = function(){

  document.getElementById("monR").textContent = '';
  document.getElementById("tueR").textContent = '';
  document.getElementById("wenR").textContent = '';
  document.getElementById("thrR").textContent = '';
  document.getElementById("friR").textContent = '';
  document.getElementById("satR").textContent = '';
  document.getElementById("sunR").textContent = '';
}