document.addEventListener('DOMContentLoaded', init);

function init() {
  

  document.getElementsByClassName('addStudents')[0].addEventListener('click', clickStudents);
  
  document.getElementsByClassName('randomStudent')[0].addEventListener('click', randomStudent);
  
  document.getElementsByClassName('addTeams')[0].addEventListener('click', splitTeam);
}

var pickedNames = [];
function clickStudents () {

    var names = document.getElementsByClassName('Students')[0].value;

    if(names === '')  {
        alert("Please enter a name");
    }
    var output = names.split(", ");
     
    for(var i = 0; i < output.length; i++) {
      pickedNames.push(output[i]);
    }

    console.log(pickedNames);

    document.getElementsByClassName('Output')[0].textContent = pickedNames;

    document.getElementsByClassName('Students')[0].value = " ";
}

function randomStudent () {
    var random = Math.floor(Math.random() * pickedNames.length)
    var randomPicked = pickedNames[random];

    var outputRandom = document.getElementsByClassName('randomPick')[0];

    outputRandom.textContent = randomPicked;

}

function splitTeam () {
    var teams = document.getElementsByClassName('teams')[0].value;

    var teamShuffle = shuffle(pickedNames);
    console.log(teamShuffle);

    var results = [];
    length = Math.ceil(teamShuffle.length / teams);

    for(var i =0; i< length; i++) {  //split into teams using slice()
        results.push(teamShuffle.slice(i * teams, (i + 1) * teams ));
    }

    var listTeams = []; 
    for(var i = 0; i < results.length; i++) {
      listTeams.push(results[i]);
      
    }
    console.log(listTeams);

    for(var i = 0; i < listTeams.length; i++) {
        var createDiv = document.createElement('div');
        createDiv.classList.add("team" + i);

    document.getElementsByClassName('teamsList')[0].appendChild(createDiv).textContent = listTeams[i];
    }

    document.getElementsByClassName('teams')[0].value= " ";
}

function shuffle(array) {
    var currIndex = array.length, tempVal, randomIndex;

      while(0 !== currIndex) {
          randomIndex = Math.floor(Math.random() * currIndex);
          currIndex -= 1;

          tempVal = array[currIndex];
          array[currIndex] = array[randomIndex];
          array[randomIndex] = tempVal;
        }
    return array;         

}