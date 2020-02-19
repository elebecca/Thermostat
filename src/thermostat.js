'use strict';

function Thermostat() {
    return this.temperature = 20;
};

Thermostat.prototype.up = function() {
    if (this.temperature < 25 ) {
        this.temperature ++;
    }  
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
        this.temperature --;
  }
};



var thermostat = new Thermostat()

console.log(thermostat.temperature)

