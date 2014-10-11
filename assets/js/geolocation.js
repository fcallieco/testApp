
function checkPosition() {
    var options = { timeout: 60000, maximumAge: 60000 }; // timeout at 60000 milliseconds (60 seconds)

    var status = localStorage.getItem('statoAttuale');

    var onSuccess = function (position) {
        //    alert('Latitude: ' + position.coords.latitude + '\n' +
        //      'Longitude: ' + position.coords.longitude + '\n' +
        //      'Altitude: ' + position.coords.altitude + '\n' +
        //      'Accuracy: ' + position.coords.accuracy + '\n' +
        //      'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        //      'Heading: ' + position.coords.heading + '\n' +
        //      'Speed: ' + position.coords.speed + '\n' +
        //      'Timestamp: ' + position.timestamp + '\n');

        var urlServer = "http://partymate.azurewebsites.net/AppPu";
        var typeRequest = "POST";

        // Inserico NOME, COGNOME E FOTO //
        var formData = {
            method: "",
            submethod: "",
            parameters: [],
            values: [position.coords.latitude, position.coords.longitude, status]
        };
        $.ajax({
            url: urlServer,
            type: typeRequest,
            data: formData,
            success: function (data) {
                if (data == false)
                    alert('Puuu... Non fare la furbetta!!!');
                else {
                    status = parseInt(status) + 1;
                    localStorage['statoAttuale'] = status;
                    window.location = 'index.html';
                }
            }
        });
    };

    function onError(error) {
        alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError.options);
}


