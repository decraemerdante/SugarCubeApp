(function () {


    var date;
    var time;

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    fillInTimeDate();
    function fillInTimeDate() {
        console.log("Hi");
        date = getDateToday();
        time = getTimeNow();

        document.getElementById("Date").setAttribute('value', date);
        document.getElementById("Time").setAttribute('value', time);
    }

    function getDateToday() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }

    function getTimeNow() {

        return new Date(new Date().getTime()).toLocaleTimeString(); // 11:18:48 AM
    }


    function onDeviceReady() {
        fillInTimeDate();

    };


})();