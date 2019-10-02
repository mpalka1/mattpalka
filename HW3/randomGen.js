var pw = [];
var data = {letter:['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
letterUP:['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
symbols:['!', '@', '#', '$'],
numbers:['0','1','2','3','4','5','6','7','8','9']};
var pwLen = prompt('What is you pw length?');
var pwSpecial = confirm('Do you want special Characters?');
var pwNumbers= confirm('Do you want special Numbers?');
var pwUpper = confirm('Do you want UpperCase?');


function createArray(q1,q2,q3){
    var newArray = [];
    var arrayPopulation = newArray.concat(data.letter);

    if(q1===true){
        arrayPopulation = arrayPopulation.concat(data.symbols);
    }
    if(q2===true){
        arrayPopulation = arrayPopulation.concat(data.numbers);
    }
    if(q3===true){
        arrayPopulation = arrayPopulation.concat(data.letterUP);
    }
    return arrayPopulation;
}

function createPass(array,len) {
    console.log(array);
    var arrayPass = [];
    // While there remain elements to shuffle...
for(var i =0; i < len ; i++){
    // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * (array.length-1));

      var randVal = array[randomIndex];
      arrayPass.push(randVal);
      length-=1;
    }
    console.log(arrayPass);
  }
  
    /* randomize array */
    createPass(createArray(pwSpecial,pwNumbers,pwUpper),pwLen);


/* first event */
// change this pw into a dynamic random pw
//document.write(pw);