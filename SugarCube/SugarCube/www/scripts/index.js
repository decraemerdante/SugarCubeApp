// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function Waarde() {
        this.id;
        this.value;
        this.insuline;
        this.type;
        this.moment;

    }
    getAllValues();
    function onDeviceReady() {
        getAllValues();

    };


    function getAllValues() {
        $.ajax({
            url: "http://localhost:1709/api/Diabetes",
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

    function fillInTable(data) {
        var l = data.length;        
        var div = $("#waardeTable");   
        
        var tableString = "<tr>" +
            "<th>Date</th>" +
            "<th>Value</th>" +
            "<th>Insulin</th>" +
            "<th>Type</th>" +
            "</tr>";

        for (var i = 0; i < l; i++) {
           tableString += "<tr>" +
                "<td>" + data[i].moment + "</td>" +
                "<td>" + data[i].waarde1 + "</td>" +
                "<td>" + data[i].insuline + "</td>" +
                "<td>" + getType(data[i].type) + "</td>" +
                "</tr>";
        }

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
    
} )();