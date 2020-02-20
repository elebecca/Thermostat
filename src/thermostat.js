
function Thermostat() {
    this.temperature = 20;
    this.maxTemperature = 25;
};

Thermostat.prototype.up = function() {
    if (this.temperature < this.maxTemperature ) {
          this.temperature ++;
    }
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
        this.temperature --;
  }
};

Thermostat.prototype.powerSaver = function() {
  if (this.maxTemperature === 32 ) {this.maxTemperature = 25}
  else {this.maxTemperature = 32}

};

Thermostat.prototype.reset = function(){
  this.temperature = 20 ;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {return 'low-usage'}
  else if (this.temperature < 25) {return 'medium-usage'}
  else {return 'high-usage'}
}
