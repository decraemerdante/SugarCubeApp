﻿

function fillInTable(data) {
    var newData = data;
    var l = data.length;
    var div = $("#waardeDiv");

    var tableString = "<table id='waardeTable' class='ui-responsive bordered'><tbody>";
         
  

    var groupByDate = groupByDateNow(newData);
    console.log(groupByDate);
    
    
    Object.keys(groupByDate).sort().reverse().forEach(function (category) {
        
        tableString += "<tr><td class='dates' colspan='5'>" + getDate(category) + "</td></tr>";
        tableString += "<tr><td></td><td></td><td>Bolus</td><td>Basal</td></tr>";
        groupByDate[category].forEach(function (memb, i) {
            
            tableString += "<tr><td>" + getTime(memb.time) + "</td>" +
                "<td>" + memb.waarde1 + "</td>" +
                "<td>" + memb.bolus + "</td>" +
                "<td>" + memb.basal + "</td>" +      
                "<td><a href='#'  ><i class='material-icons Details' id='" + memb.id + "'>keyboard_arrow_right</i></a></td>" +
                "</tr > ";

        });
    });
    tableString += "</tbody></table>";    
    div.html("");
    div.append(tableString);
    $(".Details").on("click", details);
    $("#addButton").css("visibility", "visible");
}

function details(e) {
    e.preventDefault();
   
    var id = e.target.id;
   
    console.log(id);

    getSelectedValue(id);

    window.location.href = "Details.html";
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
    var newData = data;

    for (i = 0; i < newData.length; i++) {
        
        var formatDate = dateFormat(newData[i].date);
       
        newData[i].date = formatDate;
    }


    var groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    return groupBy(newData, 'date');
    console.log(groubedByTeam);
}


function getTime(dateTime) {
    var myTime = dateTime.substr(0, 5);

    return myTime;
}

function getDate(date) {
    console.log(date);    
    return getDateFull(new Date(date));
}

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function getDateFull(date) {
    return(days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()); //Tuesday February 12 2013


}

function dateFormat(date) {
    var parts = date.split('/');
    var newDaypart = parseInt(parts[0]);
    newDaypart += 1;

    console.log(parts);
    
    console.log(new Date(parts[2], parts[1] - 1, parts[0]).toISOString().slice(0, 11));
    return new Date(parts[2], parts[1] -1, newDaypart.toString()).toISOString().slice(0, 10); 
}



