'use strict';

function Thermostat() {
    return this.temperature = 20;
};

Thermostat.prototype.up = function() {
    this.temperature ++;
};

Thermostat.prototype.down = function() {
    this.temperature --;
}



var thermostat = new Thermostat()

console.log(thermostat.temperature)