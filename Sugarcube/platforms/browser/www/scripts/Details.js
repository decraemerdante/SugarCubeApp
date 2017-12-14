﻿(function () {
    "use strict";


    document.addEventListener('deviceready', onDeviceReady.bind(this), false);




    function onDeviceReady() {
      
        init();
       
    }

   




})(init());

function init() {
   getSelectedValue(localStorage.getItem('id'));
   
   console.log(data);
  

   

}


function createView(data) {

    $(".delete").on("click", function (e) {
        e.preventDefault();
        console.log(localStorage.getItem('id'));
        deleteValue(localStorage.getItem('id'));
    });
    fillInTimeDate(data);
    $('.input-field label').addClass('active');
    $("#Value").val(data.waarde1);
    $("#Bolus").val(data.bolus);
    $("#Basal").val(data.basal);
   // $("#Value").validate()
}


function fillInTimeDate(data) {

    

    var picker = $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: -15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        format: "dd/mm/yyyy",
        clear: 'Clear',
        close: 'Ok',
        onStart: function () {
            var stringDate = data.date;
            var pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
            var arrayDate = stringDate.match(pattern);
            var dt = new Date(arrayDate[3], arrayDate[2] - 1, arrayDate[1]);
            this.set('select', [dt.getFullYear(), dt.getMonth(), dt.getDate()]);
        },
        closeOnSelect: false // Close upon selecting a date,
    });

    $('.timepicker').pickatime({
        default: data.time,// Set default time: 'now', '1:30AM', '16:30'
        fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
        twelvehour: false, // Use AM/PM or 24-hour format
        donetext: 'OK', // text for done-button
        cleartext: 'Clear', // text for clear-button
        canceltext: 'Cancel', // Text for cancel-button
        autoclose: false, // automatic close timepicker
        ampmclickable: true, // make AM PM clickable

        aftershow: function () { }

    });

}