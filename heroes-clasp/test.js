function onFormSubmit(e) {
    if(!!e.response){
        var formResponse = e.response;
        // If all questions are required, getItemResponses returns responses in form-order
        var itemResponses = formResponse.getItemResponses();
        var postcode = itemResponses[0].getResponse();  // returns a string
        const url = `api.postcodes.io/postcodes/${postcode}/nearest`;
        const payload = {
            limit: 10,
            radius: 1000
        }
        var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true, payload});
        console.log(response);
    }
    else{
        console.log('ERROR --> No response found!!');
    }
}