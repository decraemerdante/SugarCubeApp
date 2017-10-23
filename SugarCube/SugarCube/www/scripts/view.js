

function fillInTable(data) {
    var l = data.length;
    var div = $("#waardeTable");

    var tableString = "<thead><tr>" +
        "<th data-priority='1'>Date</th>" +
        "<th data-priority='2'>Value</th>" +       
        "</tr></thead><tbody>";

    for (var i = 0; i < l; i++) {
        tableString += "<tr>" +
            "<th>" + data[i].moment + "</th>" +
            "<td>" + data[i].waarde1 + "</td>" +
            "<td><span class='glyphicon glyphicon-chevron-right'><span></td>"
            "</tr>";
    }
    tableString += "</tbody>"

    div.append(tableString);
}


function getType(type) {
    switch (type) {
        case "B": return "Breakfast"; break;
        case "L": return "Lunch"; break;
        case "D": return "Dinner"; break;

        default: return "Extra";
    }
}
