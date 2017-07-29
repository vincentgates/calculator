/**
 * @description Calculator prototype.
 * @constructor Calculator
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

    this.render = function() {
        var main = document.createElement('div');
        main.innerHTML = '<div id="opWindow">0</div>';
        main.className = 'table';
        main.setAttribute('id', 'main');
        document.body.appendChild(main);

        var btn = '+,-,x,/,^,1,2,3,4,5,6,7,8,9,0,clear,='.split(',');
        for (var b in btn) {
            var newElement = document.createElement('button');
            newElement.className = 'third';
            newElement.innerHTML = btn[b];
            main.appendChild(newElement);
        }

    };
    this.run = function (){
        var screen   = document.getElementById('opWindow');
        var elements = document.getElementsByTagName('button');
        var clear    = document.getElementsByClassName('clear');

        addtocurrentvalue = function(i){
            return function(){
                if (elements[i].innerHTML === '÷') {
                    screen.innerHTML  +=  '/' ;
                }else if(elements[i].innerHTML === 'x'){
                    screen.innerHTML += '*';
                }else{
                    screen.innerHTML  += elements[i].innerHTML;
                }
            };
        }

        calculate = function(i) {
            return function () {
                screen.innerHTML = eval(screen.innerHTML);
            };
        }

        for(var i=0;i<elements.length;i+=1){
            if(elements[i].innerHTML === '='){
                elements[i].addEventListener('click', calculate(i));
            }
            else{
                elements[i].addEventListener('click', addtocurrentvalue(i));
            }
        }

        clear.onclick = function () {
            screen.innerHTML = '0';
        };


    };

}