const adviceNumber = document.getElementById('adviceNumber');
const advice = document.getElementById('advice');
const getAdvice = document.getElementById('getAdvice');


getAdvice.addEventListener('click', ()=> {
   
    dataApi();
})

window.onload = () => {
    dataApi();
}

function dataApi()  {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json()
    }).then(adviceData => {
        const adviceObj = adviceData.slip;
        adviceNumber.innerHTML = `${adviceObj.id}`;
        advice.innerHTML = `<p class="advice">${adviceObj.advice}</p>`
    }).catch(error => {
        console.log(error);
    });
        
}

