

function getAllValues() {
    $.ajax({
       
        url: host() + "/api/Diabetes",
        type: "GET",
        dataType: "json",
        data: {
            format: "json"
        },
        success: function (data) {
            console.log(data);
            fillInTable(data);
        },
        error: function (xhr, message) {
            console.log(xhr, message);
        }

    });
}
var response;
var errorres;
function sendNewValue(data) {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: host() + "/api/Diabetes",
        type: "POST",
        dataType: "json",
        data: data,          
        
        success: function (data) {
            console.log(data);
            response = true;
          
           
        },
        error: function (xhr, message) {
            console.log(xhr, message);
            response = false;
            errorres = message;
            
        }

    });
}