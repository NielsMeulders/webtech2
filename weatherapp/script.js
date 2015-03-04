(function () {
    /*global $, jQuery*/
    "use strict";
    var App, myApp, x, y;
    
    function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else { 
        console.log('error');}
    }
    
    function showPosition(position) {
        return position.coords.longitude + "," + position.coords.latitude;
    }
    
    App = function () {
    this.showWeather = function () {
        getLocation();
        console.log(getLocation());
        var location_standard = "37.8267,-122.423";
        var url = "https://api.forecast.io/forecast/7df4a8ead9a4572bf91f2a69224d9867/" + location_standard;
        
        $.ajax({
            dataType: 'jsonp',
            url: url,
            success: function (result) {
                
                var temp = result.currently.temperature;
                
                //localStorage.setItem("stations", JSON.stringify(stations));
                
                console.log(temp);
            },
            error: function () {
                
            }
        });
    };
};


myApp = new App();
myApp.showWeather();

}());