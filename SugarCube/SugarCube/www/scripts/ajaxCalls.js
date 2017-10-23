

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