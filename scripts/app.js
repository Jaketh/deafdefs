// Opens the scope for the application to run in.

angular.module("toDoListApp", []).controller('mainCtrl', ['$scope', '$window', function($scope, $window) {
  $scope.showRight = false;
  $scope.showWrong = false;
  $scope.showA = false;
  $scope.showB = false;
  $scope.showC = false;
  $scope.showD = false;
  $scope.showE = false;
  $scope.showF = false;
  $scope.showG = false;
  $scope.showH = false;
  $scope.showI = false;
  $scope.showJ = false;
  $scope.showK = false;
  $scope.showL = false;
  $scope.showM = false;
  $scope.showN = false;
  $scope.showO = false;
  $scope.showP = false;
  $scope.showQ = false;
  $scope.showR = false;
  $scope.showS = false;
  $scope.showT = false;
  $scope.showU = false;
  $scope.showV = false;
  $scope.showW = false;
  $scope.showX = false;
  $scope.showY = false;
  $scope.showZ = false;

  $scope.currentWord = [];
  $scope.currentDef = [];
  $scope.isSpelling = false;
  $scope.definitions = [];
  $scope.rightAnswers = 0;
  $scope.wrongAnswers = 0;
  $scope.answer = "";

  $scope.setWords = function() {
      $scope.words = $window.words;
      $scope.gameInit(words);
      // console.log(words);
      $scope.shuffle(words);
      // console.log(words);

      $scope.gatherDefinitions();
      $scope.started = true;

      var container =  document.getElementById("container");
      if($scope.started == true){
        container.setAttribute("class" , container.getAttribute("class")+ " round-top");
      }
  }

  // console.log($scope.words)
  // var fakeAssVariable = typeof $window.words;
  // console.log($window.words == null);

  $scope.getWords = function(words) {
    // console.log(words + "Line 10");
  }

  // pulling data from the textbox.
  $scope.getInput = function() {
    var input = document.getElementById("answers");
    return input;
  }

  $scope.congratulateAnswer = function() {
    $scope.setAllFalse();
    $scope.showRight = true;
    $scope.rightAnswers += 1;
    // console.log('wowser mcgowser');
  }

  $scope.mockAnswer = function(){
    $scope.setAllFalse();
    $scope.showWrong = true;
    $scope.wrongAnswers +=1;
  }

  //checks for correct answer from user.
  $scope.processInput = function() {

    var ans = document.getElementById("answer[" + $scope.input + "]");
    ans.checked=false;

    if(!$scope.isSpelling){
      $scope.isSpelling = true;
      // if ($scope.answer.toUpperCase() === $scope.currentDef.toUpperCase()) {
      if (ans.value === $scope.currentDef) {
        setTimeout(function (){
          $scope.setAllFalse();
          $scope.setWords();

        }, 2000);
        $scope.congratulateAnswer();
      } else {
        setTimeout(function (){
          $scope.setAllFalse();
          $scope.setWords();
        }, 2000);
        $scope.mockAnswer();
        //create an incorrect function here.
        // console.log("Incorrect");
      }
    }
  }

  //getRandom Selects a random number.
  $scope.getRandom = function(length) {
    return Math.floor(Math.random() * length);
  }

  //initialize the game with the specified library. "words" is an array of words, BUT will later substitute with .json
  // function gameInit, calls currentWord, the word that gets spelled, and gameInit also calls spellCurrentWord.
  $scope.gameInit = function(words) {
    $scope.totalAnsers += 1;
    $scope.setLib(words);
    // console.log(words);
    var temp = words[$scope.getRandom(words.length)];
    $scope.currentWord = temp.word;
    $scope.currentDef = temp.definition;
    console.log($scope.currentDef + " " + $scope.currentWord);
    $scope.spellCurrentWord($scope.currentWord, 0);
    // console.log("currentword="+$scope.currentWord);
  }

  // sliceWord changes a word into an array of letters.
  $scope.sliceWord = function(word) {
    word = word.toUpperCase();
    var letters = word.split("");
    // console.log(letters);
    return letters;
  }

  //passes word that needs to be spelled, and paramater 'i' which is an itterator.
  //When you call this function somewhere else, it always has to initialize at 0.
  $scope.spellCurrentWord = function(word, i) {
    $scope.isSpelling = true;
    // dices up word into array.
    var letters = $scope.sliceWord(word);
    //letters[i] is just the itterated letter.
    // console.log(letters[i]);
    //sets the timing for how long a letter will be displayed.
    setTimeout(function() {
      //for things to occur live in the view, without a built in function,
      //$apply specifies that you want live updates in the view.
      $scope.$apply(function() {
        //calls display letter function bellow, which runs the conditional statements.
        $scope.displayLetter(letters[i]);
      });
      //nice.
      // console.log("DISPLAYLETTERSLOLOL")
      //adds one to the itteration count.
      i++;
      if (i < word.length) {
        //recursive call. Reflecting the updated itterator.
        $scope.spellCurrentWord(word, i);
      } else {
        $scope.isSpelling = false;
      }
      // this 500ms is the amount of time that javascript will wait before running everything inside of 'setTimeout'
    }, 500);

    setTimeout(function() {
      //$apply specifies that you want live updates in the view. again.
      $scope.$apply(function() {
        //turns off every letter. hides (deactivates show) for all non-active letters.
        //letter is here for 500ms 500ms break, next letter.
        // because javascript is non-stopping, we wait 500ms to hide letters on top
        // of the 500ms pause between letters. This means that the letter will show up
        // for 500ms and then 500ms later, it will be hidden by the following function.
        $scope.setAllFalse();
      });
    }, 1000);
  }

  $scope.setLib = function(words) {
    $scope.words = words;
  }

  // ng-show is an pre-built angular directive used inside the view.
  // if you'll look at the index.html page you will see it applied to each div.
  $scope.displayLetter = function(letter) {
    // document.getElementById("image-area").innerHTML = letter;
    // console.log("hue");
    if (letter == "A") {
      $scope.showA = true;
    }
    else if (letter == "B") {
      $scope.showB = true;
    }
    else if (letter == "C") {
      $scope.showC = true;
    }
    else if (letter == "D") {
      $scope.showD = true;
    }
    else if (letter == "E") {
      $scope.showE = true;
    }
    else if (letter == "F") {
      $scope.showF = true;
    }
    else if (letter == "G") {
      $scope.showG = true;
    }
    else if (letter == "H") {
      $scope.showH = true;
    }
    else if (letter == "I") {
      $scope.showI = true;
    }
    else if (letter == "J") {
      $scope.showJ = true;
    }
    else if (letter == "K") {
      $scope.showK = true;
    }
    else if (letter == "L") {
      $scope.showL = true;
    }
    else if (letter == "M") {
      $scope.showM = true;
    }
    else if (letter == "N") {
      $scope.showN = true;
    }
    else if (letter == "O") {
      $scope.showO = true;
    }
    else if (letter == "P") {
      $scope.showP = true;
    }
    else if (letter == "Q") {
      $scope.showQ = true;
    }
    else if (letter == "R") {
      $scope.showR = true;
    }
    else if (letter == "S") {
      $scope.showS = true;
    }
    else if (letter == "T") {
      $scope.showT = true;
    }
    else if (letter == "U") {
      $scope.showU = true;
    }
    else if (letter == "V") {
      $scope.showV = true;
    }
    else if (letter == "W") {
      $scope.showW = true;
    }
    else if (letter == "X") {
      $scope.showX = true;
    }
    else if (letter == "Y") {
      $scope.showY = true;
    }
    else if (letter == "Z") {
      $scope.showZ = true;
    }
  }

  $scope.setAllFalse = function() {
    $scope.showA = false;
    $scope.showB = false;
    $scope.showC = false;
    $scope.showD = false;
    $scope.showE = false;
    $scope.showF = false;
    $scope.showG = false;
    $scope.showH = false;
    $scope.showI = false;
    $scope.showJ = false;
    $scope.showK = false;
    $scope.showL = false;
    $scope.showM = false;
    $scope.showN = false;
    $scope.showO = false;
    $scope.showP = false;
    $scope.showQ = false;
    $scope.showR = false;
    $scope.showS = false;
    $scope.showT = false;
    $scope.showU = false;
    $scope.showV = false;
    $scope.showW = false;
    $scope.showX = false;
    $scope.showY = false;
    $scope.showZ = false;
    $scope.showRight = false;
    $scope.showWrong = false;
  }

  $scope.gatherDefinitions = function() {
    var exists = false;
    for (var i = 0; i < 4; i++) {
      $scope.definitions[i] = $scope.words[i].definition;
    }
    if ($scope.definitions.indexOf($scope.currentDef) == -1) {
      $scope.definitions[$scope.getRandom(4)] = $scope.currentDef;
    }
    console.log($scope.definitions);
  }

  $scope.shuffle = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}]);
