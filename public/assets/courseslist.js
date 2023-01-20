// Viewing All Courses


$(document).ready(function(){

    $('form').on('submit', function(){
        var name = $('#name').val();
        var duration = $('#duration').val();
        var fees = $('#fees').val();
        $.ajax({
          type: 'POST',
          url: '/addCourses',
          data: {name: name, duration: duration, fees: fees},
          success: function(data){
            alert('course added');
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });


});
