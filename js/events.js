function onClickAddContact()
{
    $('#contact-form').trigger('reset');
    $('#contact-form').fadeToggle('fast');
}

function onClickSaveContact(event)
{
    event.preventDefault();
    
    var title = $('#title').val();
    var lastName = $('#lastName').val();
    var firstName = $('#firstName').val();
    var phone = $('#phone').val();
    
    var contact = new Object();
    
    contact.title = title;
    contact.lastName = lastName;
    contact.firstName = firstName;
    contact.phone = phone;
    
    var carnetAdresses = loadDataFromStorage();
    
    if (carnetAdresses == null)
    { carnetAdresses = []; }
    carnetAdresses.push(contact);
    
    saveDataToStorage(carnetAdresses)
    
    
    onClickAddContact();
    refreshCarnetAdresses();
    
}


function onClickShowDetails()
{
    var index = $(this).data('index');
    var carnetAdresses = loadDataFromStorage();
    
}