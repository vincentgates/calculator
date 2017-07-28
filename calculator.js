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
    };

    this.render = function() {
        var main = document.createElement('div');
        main.innerHTML = '<div id="opWindow">0</div>';
        main.className = 'table';
        main.setAttribute('id', 'main');
        document.getElementsByTagName('body')[0].appendChild(main);

        var btn = '+,-,x,/,^,1,2,3,4,5,6,7,8,9,0,clear,='.split(',');
        for (var b in btn) {
            var newElement = document.createElement('button');
            newElement.className = 'third';
            newElement.innerHTML = btn[b];
            main.appendChild(newElement);
        }

    };

}