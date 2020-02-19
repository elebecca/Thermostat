'use strict';

function Thermostat() {
    return this.temperature = 20;
};

Thermostat.prototype.up = function() {
    this.temperature += 1;
};

var thermostat = new Thermostat()

console.log(thermostat.temperature)