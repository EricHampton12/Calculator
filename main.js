var app = document.getElementById('app');
app.setAttribute('class', 'container');

oldNum = "";
newNum = "";
newInput = 0;
var screen;
var count = "";
var display = document.createElement('div');
var elements = ["Clear", " ", " ", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", " ", ".", "="];
var whatPressed = this.id;
var operator = "";


function what_pressed() {
    display = document.innerHTML(this.innerHTML);
}

function render_page() {
    var title = document.createElement('div');
    title.setAttribute('class', "text-center");
    title.innerHTML = "Calculator";
    app.appendChild(title);

    var display = document.createElement('div');
    display.setAttribute('class', 'row');

    var displayRow = document.createElement('div');
    displayRow.setAttribute('class', 'text-center text-white align-text-right');

    var displayCol = document.createElement('col-12');
    displayCol.innerHTML = "Input/Output";
    displayCol.setAttribute('class', 'text-align-right');
    displayCol.setAttribute('id', 'display');



    displayRow.appendChild(displayCol);
    display.appendChild(displayRow);
    app.appendChild(display);

    var myContainer = document.createElement('div');
    myContainer.setAttribute('class', 'container bg-dark');

    var myRow = '';


    for (var i = 0; i < 20; i++) {


        if (i % 4 == 0) {
            myRow = document.createElement('div');
            myRow.setAttribute('class', 'row');

        }

        var myCol = document.createElement('div');
        myCol.setAttribute('class', 'col-3 px-3 py-3 text-center border border-dark');
        var btn = document.createElement('button');
        btn.innerHTML = elements[i];
        btn.id = i;
        btn.addEventListener('click', which_button);
        btn.setAttribute('class', 'btn-lg btn-primary btn-tile')
        myCol.appendChild(btn);
        myRow.appendChild(myCol);

        if ((i % 4) - 3 == 0) {


        }



        app.appendChild(myContainer);
        myContainer.appendChild(myRow);
        app.appendChild(myRow);
    }





}

function calculator() {
    console.log('operator', operator)
    console.log({ oldNum, newNum });
    switch (operator) {
        case "/":
            return parseInt(newNum) / parseInt(oldNum);
            break;

        case "*":
            return parseInt(oldNum) * parseInt(newNum);
            break;

        case "-":
            return parseInt(newNum) - parseInt(oldNum);
            break;

        case "+":
            return parseInt(oldNum) + parseInt(newNum);
            break;

    }
}



function which_button() {
    btn = (this.innerHTML);
    var displayCol = document.getElementById('display');
    displayCol.innerHTML = btn;
    switch (btn) {

        case 'Clear':
            console.log("Clear ", btn)
            operator = "";
            oldNum = 0;
            newNum = 0;
            screen = 0;
            count = 0;
            newInput = 0;
            result = 0;
            break;

        case '/':
        case '*':
        case '-':
        case '+':
            console.log("operator ", btn)

            if (operator != "") {
                calculate()
            }

            operator = btn;
            break;

        case '=':
            console.log("=", btn)
            calculate();
            var result = calculator();
            console.log(result);

            var displayCol = document.getElementById('display');
            displayCol.innerHTML = result;

            break;


        case ".":
            console.log(". ", btn)
            if (parseInt(oldnum) != '.') {

            }
            break;

        default:
            console.log('number:', btn)

            // oldNum = newInput;
            // newInput = 0;

            if (operator != "") {
                oldNum = btn;
            } else {
                newNum = btn;
            }



    }



}

function calculate() {

}






function init() {
    render_page();
}