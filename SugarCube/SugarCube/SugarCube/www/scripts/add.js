(function () {

   
    var date;
    var time;

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
   

    function init() {
      
        fillInTimeDate();
        $(".submitButton").click(submitNewValue);
        $('select').material_select();

        
    }
    init();
    function fillInTimeDate() {

       

       var picker = $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            format:"dd/mm/yyyy",
            clear: 'Clear',
            close: 'Ok',
            onStart: function () {
                var date = new Date();
                this.set('select', [date.getFullYear(), date.getMonth(), date.getDate()]);
            },           
            closeOnSelect: false // Close upon selecting a date,
        });
      
        $('.timepicker').pickatime({
            default: 'now',// Set default time: 'now', '1:30AM', '16:30'
            fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
            twelvehour: false, // Use AM/PM or 24-hour format
            donetext: 'OK', // text for done-button
            cleartext: 'Clear', // text for clear-button
            canceltext: 'Cancel', // Text for cancel-button
            autoclose: false, // automatic close timepicker
            ampmclickable: true, // make AM PM clickable
            
            aftershow: function () { }
               
        });
        var currentdate = new Date();
        var currentMinutes;

        if (currentdate.getMinutes() < 10) {
            currentMinutes = "0" + currentdate.getMinutes();
        }
        else {
            currentMinutes = currentdate.getMinutes();
        }
        var currentime = currentdate.getHours() + ":" + currentMinutes;
   
        $(".timepicker").val(currentime);
    }

  

   


    function onDeviceReady() {
        init();

    }
    function submitNewValue(e) {
        e.preventDefault();
        if (!$(".validate").val()) {
            Materialize.toast('Please enter a Value', 30000);
        }
        else {
              var t = document.getElementById("Type");
                var value = {
                    Waarde1: $("#Value").val(),
                    Bolus: $("#Bolus").val(),
                    Basal: $("#Basal").val(),
                    Date: $(".datepicker").val(),
                    Time: $(".timepicker").val(),
                    Type: t.options[t.selectedIndex].value
                };

                sendNewValue(JSON.stringify(value));
        }
              
    }

    
        })();

      

     

    
    
      
     
               
       
       
           
       
       
       
    

