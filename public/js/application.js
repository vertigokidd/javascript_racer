$(document).ready(function() {
  var turtleCounter = 0;
  var rabbitCounter = 0;
  var beginTime = '';
  var endTime = '';
  $("#turtle-wins p, #turtle-wins img, #turtle-wins form").hide();
  $("#rabbit-wins p, #rabbit-wins img, #rabbit-wins form").hide();
  $(document).on('keyup',function(key){
    if ( beginTime === '' ) {
      beginTime = new Date();
      console.log(beginTime)
    }
    if (turtleCounter < 11 && rabbitCounter < 11) {
      switch(parseInt(key.which,10)) {
        // var keycode = parseInt(key.which,10)

        // console.log(keycode);

          case 65:
            turtleCounter += 1


            // console.log(turtleCounter);
            $('.turtle').removeClass();
            $('#' + turtleCounter).find("td").first().addClass('turtle');
            break;
          case 76:
            rabbitCounter += 1
            // console.log(turtleCounter);
            $('.rabbit').removeClass();
            $('#' + rabbitCounter).find("td").last().addClass('rabbit');
            
            break;
          // default:
          //   break;
        };
    }
    else {
      if ( endTime === '' ) {
        endTime = new Date();
        var finalTime = endTime - beginTime;
        console.log(finalTime)
      } ;
      if(turtleCounter > 10 && turtleCounter < 12){
        $(".winning-form input").first().attr("value",finalTime);
        $("#turtle-wins p, #turtle-wins img, #turtle-wins form").show();
      }
      else if(rabbitCounter > 10 && rabbitCounter < 12){
        $(".winning-form input").last().attr("value",finalTime);
        $("#rabbit-wins p, #rabbit-wins img, #rabbit-wins form").show();
      }
    }
  });
});
