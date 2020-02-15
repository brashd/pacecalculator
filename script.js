const distanceInput = document.querySelector('input[name=distance]');
let timeInputHH = document.querySelector('input[name=hh]');
const timeInputMM = document.querySelector('input[name=mm]');
const timeInputSS = document.querySelector('input[name=ss]');
const calcButton =  document.getElementById('calculate');

function paceCalc (e){
 e.preventDefault();
   
      
const km = parseFloat(distanceInput.value);
 const hours = parseFloat(timeInputHH.value);
 const minutes = parseFloat(timeInputMM.value);
 const secs = parseFloat(timeInputSS.value);

const totalMinutes = (hours * 60) + minutes + (secs/60);
const pace = totalMinutes/ km;
const paceMinutes = Math.floor(pace) ;
let paceSeconds = Math.round((pace - paceMinutes)*60);

if (paceSeconds < 10) {
    paceSeconds = "0"+paceSeconds
}


document.getElementById('pace').innerHTML = `Dein Pace ist ${paceMinutes}:${paceSeconds} min/km`;
 
}

      
  function resetForm (){
    document.getElementById('calc-inputs').reset()
  }


calcButton.addEventListener('click', paceCalc)
document.getElementById('reset').addEventListener('click', resetForm)