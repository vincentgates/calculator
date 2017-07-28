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
    };


}