

describe('Thermosat', function() {

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    it('check that the thermostat is 20', function(){
        expect(thermostat.temperature).toBe(20)
    });

    it('check that increase the temperature', function(){
        thermostat.up()
        console.log(thermostat.temperature)
        expect(thermostat.temperature).toBe(21)
    });

    it('check thet descrese the temperature', function(){
        thermostat.down()
        expect(thermostat.temperature).toBe(19)
    });

    it('check min temp is 10', function(){
      thermostat.temperature = 10
      thermostat.down()
      expect(thermostat.temperature).toBe(10)
    })

    it('power saving check the maxiumum temperature 25', function(){
        thermostat.temperature = 25
        thermostat.up()
        expect(thermostat.temperature).toBe(25)
    });

    it('if power saving mode off the maximum temperature should be 32', function(){
      thermostat.temperature = 32
      thermostat.lowPower = false
      thermostat.up()
      expect(thermostat.temperature).toBe(32)
    });

    it('reset the temperatureat 20', function(){
        thermostat.temperature = 23
        thermostat.reset()
        expect(thermostat.temperature).toBe(20)
    });

    it('getEnergyUsage to return low medium and high for <18, <25 and >=25', function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage')
      thermostat.temperature = 17
      expect(thermostat.energyUsage()).toEqual('low-usage')
      thermostat.temperature = 25
      expect(thermostat.energyUsage()).toEqual('high-usage')
    });

});
