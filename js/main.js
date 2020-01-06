$(function(){
    
    // $('#add-contact').on('click', function(){
    //     $('#contact-form').fadeToggle('fast');
    // });
    //ou bien
    $('#add-contact').on('click', onClickAddContact);
    $('#save-contact').on('click', onClickSaveContact, event);
    
    $(document).on('click', '#address-book a', onClickShowDetails);
    
    refreshCarnetAdresses();
});