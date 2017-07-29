/**
 * @description Calculator prototype.
 * @constructor Calculator
 * @version 1.0.0
 * @author Vincent Gates
 */
function Calculator()
{
    /**
     * @description Assign this to variable for scope scenarios.
     * @type {Calculator}
     */
    var self = this;


    /**
     * @description Init function builds the calculator.
     */
    this.init = function() {
        /**
         * This will initiate the object.
         */
        self.render();
        self.run();
    };

    /**
     * @description Render creates/builds the elements on screen.
     */
    this.render = function() {
        var main = document.createElement('div');
        main.innerHTML = '<div id="opWindow"></div>';
        main.className = 'table';
        main.setAttribute('id', 'main');
        document.body.appendChild(main);

        var btn = '+,−,×,/,^,1,2,3,4,5,6,7,8,9,0,clear,='.split(',');
        for (var b in btn) {
            var newButton = document.createElement('button');
            newButton.innerHTML = btn[b];
            if (btn[b] === 'clear') {
                newButton.className = 'clear';
            }else if(btn[b] === '='){
                newButton.className = 'equals';
            }else{
                newButton.className = 'third';
            }
            main.appendChild(newButton);
        }

    };

    /**
     * @description Run function adds interactive component.
     */
    this.run = function (){
        var opWindow   = document.getElementById('opWindow');
        var buttons = document.getElementsByTagName('button');
        opWindow.style.height='1em';

        addtocurrentvalue = function(i){
            return function(){
                if (buttons[i].innerHTML === '÷') {
                    opWindow.innerHTML  +=  '/' ;
                }else if(buttons[i].innerHTML === 'x'){
                    opWindow.innerHTML += '*';
                }
                else if (buttons[i].innerHTML === '^') {
                    opWindow.innerHTML  +=  '**' ;
                }else{
                    opWindow.innerHTML  += buttons[i].innerHTML;
                }
            };
        }

        clear = function () {
            return function () {
                opWindow.innerHTML = '';
            };
        }

        calculate = function(i) {
            return function () {
                opWindow.innerHTML = eval(opWindow.innerHTML);
            };
        }

        for(var i=0;i<buttons.length;i+=1){
            if(buttons[i].innerHTML === '='){
                buttons[i].addEventListener('click', calculate(i));
            }
            if(buttons[i].innerHTML === 'clear'){
                buttons[i].addEventListener('click', clear(i));
            }
            else{
                buttons[i].addEventListener('click', addtocurrentvalue(i));
            }
        }

    };

}