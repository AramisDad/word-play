$(document).ready(function() {



  $(".userSentence").submit(function(ev) {
    ev.preventDefault();
    var splitInput = $(".userInput").val();

    var words = splitInput.split(' ');
    
    console.log(words[4]);
  });
});
