window.onload = function() {

    //find all elements and init variables:
    var startB = document.getElementById('startButton');
    var clearB = document.getElementById('clearButton');
    var displaySecFull = document.getElementById('displaySeconds');
    var displayAll = document.getElementById('display');
    var counter = 0;
    var counterMil1 = 0;
    var counterMil2 = 0;
    var counterSec1 = 0;
    var counterSec2 = 0;
    var counterMin1 = 0;
    var counterMin2 = 0;
    var counterHou1 = 0;
    var counterHou2 = 0;
    var clearPress = true;

    // Display function (to 24Hours):
    function CountFunction() {

        counter++;
        displayAll.innerHTML = '' + counterHou2 + counterHou1 + ':' + counterMin2 + counterMin1 + ':' + counterSec2 + counterSec1;
        displaySecFull.innerHTML = '' + counterMil2 + counterMil1 + counter;

        if (counter >= 9) {
            counter = 0;
            counterMil1++;
            if (counterMil1 > 9) {
                counterMil1 = 0;
                counterMil2++;
                if (counterMil2 > 9) {
                    counterMil2 = 0;
                    counterSec1++;
                    if (counterSec1 > 9) {
                        counterSec1 = 0;
                        counterSec2++;
                        if (counterSec2 > 5) {
                            counterSec2 = 0;
                            counterMin1++;
                            if (counterMin1 > 9) {
                                counterMin1 = 0;
                                counterMin2++;
                                if (counterMin2 > 5) {
                                    counterMin2 = 0;
                                    counterHou1++;
                                    if (counterHou1 > 9) {
                                        counterHou1 = 0;
                                        counterHou1++;
                                        if (counterHou2 > 23) {
                                            clearInterval(timer);
                                            startHandler();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //Handlers:
    function clearHandler() {
        clearInterval(timer);
        counter = 0;
        counterMil1 = 0;
        counterMil2 = 0;
        counterSec1 = 0;
        counterSec2 = 0;
        counterMin1 = 0;
        counterMin2 = 0;
        counterHou1 = 0;
        counterHou2 = 0;
        clearPress = true;
        displayAll.innerHTML = '' + counterHou2 + counterHou1 + ':' + counterMin2 + counterMin1 + ':' + counterSec2 + counterSec1;
        displaySecFull.innerHTML = '' + counterMil2 + counterMil1 + counter;
        startB.className = 'btn btn-success';
        startB.innerHTML = 'Start';
    }

    function startHandler() {
        if (clearPress === true) {
            timer = setInterval(CountFunction, 1);
            startB.className = 'btn btn-warning';
            startB.innerHTML = 'Pause';
            clearPress = false;
        } else {
            clearTimeout(timer);
            clearPress = true;
            startB.className = 'btn btn-success';
            startB.innerHTML = 'Start';
        }
    }

    //Listeners:
    startB.addEventListener('click', startHandler);
    clearB.addEventListener('click', clearHandler);
};
