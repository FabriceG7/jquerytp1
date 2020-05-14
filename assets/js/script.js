$(document).ready(function() {
  var score = 0;
  var minNumber = 1; // le minimum
  var maxNumber = 100; // le maximum
  var randomnumber = Math.floor(Math.random() * (maxNumber) + minNumber); // génération du nombre
  console.log(randomnumber);
  $("#button").click(function(){
    score ++;
    console.log(score);
    var value = $('#number').val();
    if ((value > randomnumber) && (value < 100)) {
      alert('C\'est moins!');
    }
    else if ((value < randomnumber) && (value > 1)) {
      alert('C\'est plus!');
    }
    else if (value == randomnumber) {
      alert('Tu as gagné en ' + score +' essais!');
    }
    else if ((value > 100) && (value == 1))
      alert('Entre 1 et 100 on a dit!')
  });
});
