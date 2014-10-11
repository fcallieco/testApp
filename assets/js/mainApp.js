function checkStatus() {
    var actualStatus = localStorage.getItem('statoAttuale');
    if (actualStatus == '4')
        $('#btn').hide();
    $('#img').css('background-image', 'url(images/' + actualStatus + '.png)')
}

function StartApplication() {
    localStorage['statoAttuale'] = '0';
    window.location = 'index.html';
}