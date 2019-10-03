var app = document.getElementById('app');
app.setAttribute('class', 'container');

oldNum = "";
newNum = "";
var screen;
var updater = 0;
var display = document.createElement('div');
var elements = ["Clear", " ", " ", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", " ", ".", "="];
var whatPressed = this.id;
var operator;


function what_pressed() {
    display = document.innerHTML(this.innerHTML);
}

function render_page() {
    var title = document.createElement('div');
    title.setAttribute('class', "text-center");
    title.innerHTML = "Calculator";
    app.appendChild(title);

    var screenContainer = document.createElement('div');
    screenContainer.setAttribute('class', 'row');
    var screenRow = document.createElement('div');
    screenRow.setAttribute('class', 'text-center text-white align-text-right');
    var screenCol = document.createElement('col-12');
    screenCol.setAttribute('class', 'text-align-right');
    screenCol.innerHTML = "Input/Output";
    screenRow.appendChild(screenCol);
    screenContainer.appendChild(screenRow);
    app.appendChild(screenContainer);

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

function calculator(operator) {
    switch (operator) {
        case "/":
        return oldNum / newNum;
        break;

        case "*":
            return oldNum * newNum;
            break;

        case "-":
            return oldNum - newNume;
            break;

        case "+":
            return oldNum + newNum;
            break;

    }
}



function which_button() {
    console.log(this.innerHTML)



}






function init() {
    render_page();
}