

function fillInTable(data) {
    var l = data.length;
    var div = $("#waardeTable");

    var tableString = "<tbody>";
         
        

    var groupByDate = groupByDateNow(data);
    console.log(groupByDate);
    Object.keys(groupByDate).forEach(function (category) {
        tableString += "<tr><td class='dates' colspan='4'>" + getDate(category) + "</td></tr>";
        tableString += "<tr><td></td><td></td><td>Bolus</td><td>Basal</td></tr>";
        groupByDate[category].forEach(function (memb, i) {
            
            tableString += "<tr><td>" + getTime(memb.time) + "</td>" +                
                "<td>" + memb.waarde1 + "</td>" +
                "<td>" + memb.bolus + "</td>" +
                "<td>" + memb.basal + "</td>" +
                "</tr > "

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

    return getDateFull(myDate);
}

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function getDateFull(date) {
    return(days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()); //Tuesday February 12 2013


}
