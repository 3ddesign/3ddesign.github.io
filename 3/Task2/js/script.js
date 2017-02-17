window.onload = function() {

    //find all elements and init variables:
    var startB = document.getElementById('startButton');
    var splitB = document.getElementById('splitButton');
    var resetB = document.getElementById('resetButton');
    var splitDisp = document.getElementById('splitDisp');
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
    var splitcouner = 0;
    var splitdisp = ' Split: ';

    //Listeners:
    startB.addEventListener('click', startHandler);
    resetB.addEventListener('click', clearHandler);
    splitB.addEventListener('click', splitHandler);

    // Display function (to 24Hours):
    function CountFunction() {
        counter++;
        displayAll.innerHTML = '' + counterHou2 + counterHou1 + ':' + counterMin2 + counterMin1 + ':' + counterSec2 + counterSec1 + '.' + counterMil2 + counterMil1 + counter;
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

    //Handlers
    function clearHandler() {
        clearInterval(timer);
        splitcouner = 0;
        counter = 0;
        counterMil1 = 0;
        counterMil2 = 0;
        counterSec1 = 0;
        counterSec2 = 0;
        counterMin1 = 0;
        counterMin2 = 0;
        counterHou1 = 0;
        counterHou2 = 0;
        displayAll.innerHTML = '' + counterHou2 + counterHou1 + ':' + counterMin2 + counterMin1 + ':' + counterSec2 + counterSec1 + '.' + counterMil2 + counterMil1 + counter;
        splitDisp.innerHTML = '';
        clearPress = true;
        startB.className = 'btn btn-success';
        startB.innerHTML = 'Start';
    }

    function startHandler() {
        if (clearPress === true) {
            timer = setInterval(CountFunction, 1);
            startB.className = 'btn btn-warning';
            startB.innerHTML = 'Stop';
            clearPress = false;
        } else {
            clearTimeout(timer);
            clearPress = true;
            startB.className = 'btn btn-success';
            startB.innerHTML = 'Start';
            splitdisp = ' Stop: ';
            splitHandler();
            splitdisp = ' Split: ';
        }
    }

    function splitHandler() {
        splitcouner++;
        var newP = document.createElement('p');
        newP.innerHTML = '<p>' + splitcouner + splitdisp + counterHou2 + counterHou1 + ':' + counterMin2 + counterMin1 + ':' + counterSec2 + counterSec1 + '.' + counterMil2 + counterMil1 + counter + '</p>';
        splitDisp.appendChild(newP);
    }
};
