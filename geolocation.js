
function checkPosition()
{
    var options = {timeout:60000, maximumAge: 60000}; // timeout at 60000 milliseconds (60 seconds)
 
    var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
    }
     navigator.geolocation.getCurrentPosition(onSuccess, onError.options);
}


