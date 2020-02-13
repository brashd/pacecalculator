function paceCalc (e){
    e.preventDefault()

let distanceInput = document.querySelector('input[name=distance]').value
 
let timeInput = document.querySelector('input[name=time]').value
 
 
let pace = parseFloat(timeInput) / parseFloat(distanceInput)
    pace = pace.toFixed(2)

// if (!isNaN(pace))
// {
    document.getElementById('pace').innerHTML=`Your pace is ${pace} min/km`
// }
}

document.getElementById('calculate').addEventListener('click', paceCalc)
