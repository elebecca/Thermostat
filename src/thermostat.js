
function Thermostat() {
    return this.temperature = 20;
    var lowPower = true;
};

Thermostat.prototype.up = function() {
    if (this.temperature < 25) {
          this.temperature ++;
    }
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
        this.temperature --;
  }
};

Thermostat.prototype.powerSaver = function() {
  if (lowPower === true ) {return 25}
  else {return 32}
};

Thermostat.prototype.reset = function(){
  this.temperature = 20 ;
}

Thermostat.prototype.energyUsagen = function() {
  if (this.temperature < 18) {return 'low-usage'}
  else if (this.temperature < 25) {return 'medium-usage'}
  else {return 'high-usage'}
}
