function RaceTime(){
  this.beginTime = "";
  this.endTime = ""
};

RaceTime.prototype.totalTime = function(){
  return this.endTime - this.beginTime
};

function Player(animal){
  this.animal = animal;
  this.counter = 0;
};

Player.prototype.move = function (){
  this.counter += 1
};

function track (player, position) {
  player.move();
  $('.' + player.animal).removeClass();
  $('#' + player.counter).find("td").eq(position).addClass(player.animal);
  if (player.counter === 11 ) {
    race.endTime = new Date();
    $(".winning-form input").eq(position).attr("value", race.totalTime());
    console.log(race.totalTime())
    $("#" + player.animal+ "-wins p, #" + player.animal + "-wins img, #" + player.animal + "-wins form").show();
    $(document).unbind('keyup');
  }
}


$(document).ready(function(){
  $("#turtle-wins p, #turtle-wins img, #turtle-wins form").hide();
  $("#rabbit-wins p, #rabbit-wins img, #rabbit-wins form").hide();
  turtle = new Player("turtle");
  rabbit = new Player("rabbit");
  race = new RaceTime();
  $(document).on('keyup', function(key){
    if (race.beginTime === "") {
      race.beginTime = new Date();
      console.log(race)
    };
    var keycode = parseInt(key.which,10)
    console.log(keycode);
    if (keycode === 65) {
      track(turtle, 0)
    };
    if (keycode == 76) {
      track(rabbit, 1)
    };
  });

});
