

function fillInTable(data) {
    var l = data.length;
    var div = $("#waardeTable");

    var tableString = "<thead><tr>" +
        "<th data-priority='1'>Time</th>" +
        "<th data-priority='persistent'>Value</th>" +       
        "</tr></thead><tbody>";

    var groupByDate = groupByDateNow(data);
    console.log(groupByDate);
    Object.keys(groupByDate).forEach(function (category) {
        tableString += "<tr><td class='dates' colspan='2'>" + getDate(category) + "</td></tr>";

        groupByDate[category].forEach(function (memb, i) {

            tableString += "<tr><td>" + getTime(memb.time) + "</td>" +
                "<td>" + memb.waarde1 + "</td></tr>"

        });
    });
    tableString += "</tbody>";

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

function groupByDateNow(data) {
    var groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    return groupBy(data, 'date')
    console.log(groubedByTeam);
}


function getTime(dateTime) {
    var myTime = dateTime.substr(0, 5);

    return myTime;
}

function getDate(date) {
    var myDate = date.substr(0, 10);

    return myDate;
}

