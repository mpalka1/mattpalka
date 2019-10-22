var timeHour = moment().hour();
console.log(timeHour);


$(document).ready(function() {
    var dailyTasks = JSON.parse(localStorage.getItem('myDay')) || {};

    $('.js-save').on('click', function() {
        /* get the key and the value */
        var key = $(this).data('key');
        var value = $(`#${key}`).val();

        // save it local storage
        dailyTasks[key] = value;
        // localStorage.setItem(key, value);
        // alert(localStorage.getItem(key));
        localStorage.setItem('myDay', JSON.stringify(dailyTasks));
    });
    /* pull from local storage */
    $('#hour-9').val(dailyTasks['hour-9']);
    $('#hour-10').val(dailyTasks['hour-10']);
    $('#hour-11').val(dailyTasks['hour-11']);
    $('#hour-12').val(dailyTasks['hour-12']);
    $('#hour-13').val(dailyTasks['hour-13']);
    $('#hour-14').val(dailyTasks['hour-14']);
    $('#hour-15').val(dailyTasks['hour-15']);
    $('#hour-16').val(dailyTasks['hour-16']);
    $('#hour-17').val(dailyTasks['hour-17']);
});

var myClock = document.getElementById("dateTime");
function renderTime(){
    var now = moment().format('LLL');
    myClock.textContent = now;
}

function colorBox(){
    for(var i=9; i<18;i++){
        var timeHour = moment().hour();
        console.log("h"+i)
        if(i<timeHour){
            document.getElementById('h'+i).style.background='#eeafaf';
        }else if(i==timeHour){
            document.getElementById('h'+i).style.background='#e0e5e8';
        }else{
            document.getElementById('h'+i).style.background='#a0d6b4';
        }
    }
};
setInterval("renderTime()",1000);
renderTime();
colorBox();



