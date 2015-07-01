(function() {
  'use strict';

  var airports = {
                  "DFW": {
                          "name":"Dallas/Fort Worth International Airport",
                          "region":"Texas",
                          "country":"US"
                          },
                  "ATL": {
                         "name":"Atlanta Something Something",
                          "region":"Atlanta",
                          "country":"US" 
                  }
  };

  var AirportPrototype = Object.create(window.HTMLElement.prototype);
  
  AirportPrototype.createdCallback = function() {
    console.log("ohai")
    var iataCode = this.getAttribute('iata-code');
    console.log("iata", iataCode)
    var airport = airports[iataCode];
    console.log(airport);
    this.innerHTML = "<b>I'm an airport!</b> " + iataCode + " " + airport["name"];
  };


  // Public: AirportElement constructor.
  //
  //   var airport = new AirportElement()
  //   # => <airport></airport>
  //
  window.AirportElement = document.registerElement('travel-airport', {
    prototype: AirportPrototype,
  });



})();
