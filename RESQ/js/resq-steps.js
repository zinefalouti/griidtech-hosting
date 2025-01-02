document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("step-prev").onclick = () => navigateSteps(-1);
    document.getElementById("step-next").onclick = () => navigateSteps(1);
});

//Function to switch steps in Mobile and Tablet

function switchStep(index){

    let stepicon = document.querySelector('#step-icon');
    let steptitle = document.querySelector('#step-title');
    let steptext = document.querySelector('#step-text');
    let stepprogress = document.querySelector('#step-progress');
    let stepnumber = document.querySelector('#step-number');
    let stepcheck = document.querySelector('#step-check');

    switch(index){
        case 0:
            stepicon.src='images/sp-step1.png';
            steptitle.innerHTML='Gerät kostenfrei einsenden';
            steptext.innerHTML='Kostenfreies Sendungslabel';
            stepprogress.style.width = '20%';
            stepnumber.innerHTML = '1';
            stepcheck.innerHTML = '';
            break;
        case 1:
            stepicon.src='images/sp-step2.png';
            steptitle.innerHTML='Kostenfreie Diagnose';
            steptext.innerHTML='Wir diagnostizieren Ihren Schaden kostenfrei';
            stepprogress.style.width = '40%';
            stepnumber.innerHTML = '2';
            stepcheck.innerHTML = '';
            break;
        case 2:
            stepicon.src='images/sp-step3.png';
            steptitle.innerHTML='Kostenvoranschlag';
            steptext.innerHTML='Du erhälst unser Angebot';
            stepprogress.style.width = '60%';
            stepnumber.innerHTML = '3';
            stepcheck.innerHTML = '';
            break;
        case 3:
            stepicon.src='images/sp-step4.png';
            steptitle.innerHTML='Kostenvoranschlag';
            steptext.innerHTML='Wir vollziehen den Datenrettungsprozess';
            stepprogress.style.width = '80%';
            stepnumber.innerHTML = '4';
            stepcheck.innerHTML = '';
            break;
        case 4:
            stepicon.src='images/sp-step5.png';
            steptitle.innerHTML='Bereitstellung Deiner Daten';
            steptext.innerHTML='Nach Zahlungseingang';
            stepprogress.style.width = '100%';
            stepnumber.innerHTML = '5';
            stepcheck.innerHTML = '<img src="images/sp-stepcheck.png" alt="Step Check"/>';
            break;

    }

}

let step=0;

function navigateSteps(direction) {

    step += direction;

    if (step > 4) {
        step = 0;
    } else if (step < 0) {
        step = 4;
    }

    switchStep(step);
}