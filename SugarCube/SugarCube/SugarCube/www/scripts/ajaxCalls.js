

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
            $(".addForm").submit();
            Materialize.toast('New Value added', 30000);

          
           
        },
        error: function (xhr, message) {
            console.log(xhr, message);
            response = false;
            errorres = message;
            
        }

    });
}

function deleteValue(id) {
    
        $.ajax({

            url: host() + "/api/Diabetes/" + id,
            type: "DELETE",
           
            data: {
                format: "json"
            },
            success: function (response) {
                returnToIndex();
               
            },
            error: function (xhr, message) {
                console.log(xhr, message);
            }

        });
    }


function getSelectedValue(id) {
    $.ajax({

        url: host() + "/api/Diabetes/" + id,
        type: "GET",
        dataType: "json",
        data: {
            format: "json"
        },
        success: function (data) {
            console.log(data);
            createView(data);
        },
        error: function (xhr, message) {
            console.log(xhr, message);
        }

    });
}


function editValue(data, id) {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: host() + "/api/Diabetes/" + id,
        type: "PUT",
        dataType: "json",
        data: data,

        success: function (data) {
            console.log(data);
            $(".detailForm").submit();
            Materialize.toast('Value updated', 30000);


        },
        error: function (xhr, message) {
            console.log(xhr, message);
            response = false;
            errorres = message;

        }

    });
}

