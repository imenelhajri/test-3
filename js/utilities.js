const MY_STORAGE = 'CarnetAdresse';

function loadDataFromStorage()
{
    var jsonData = localStorage.getItem(MY_STORAGE);
    return JSON.parse(jsonData);
}


function saveDataToStorage(data)
{
    var jsData = JSON.stringify(data);
    localStorage.setItem(MY_STORAGE, jsData);
}

function refreshCarnetAdresses()
{
    $('#address-book').empty();
    var carnetAdresses = loadDataFromStorage();
    for (let i=0; i<carnetAdresses.length; i++) {
        var li = $('<li>');
        var link = $('<a>').attr('href', '#').data('index', i).text(carnetAdresses[i].firstName+' '+carnetAdresses[i].lastName);
        li.append(link);
        $('#address-book').append(li);
    }
}