'use strict';

describe('Thermosat', function() {

    beforeEach(function() {
        thermostat = new Thermostat();

    });

    it('check that the thermostat is 20', function(){
        expect(thermostat.temperature).toBe(20)
    });
    it('check that increase the temperature', function(){
        thermostat.up()
        expect(thermostat.temperature).toBe(21)
    })
});