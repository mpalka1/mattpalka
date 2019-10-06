var pw = [];
var data = {letter:['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
letterUP:['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
symbols:['!', '@', '#', '$'],
numbers:['0','1','2','3','4','5','6','7','8','9']};
var outPut = '';
var passValue = document.getElementById("#pass");


function createArray(){
    var q1 = confirm('Do you want special Characters?');
    var q2= confirm('Do you want Numbers?');
    var q3 = confirm('Do you want UpperCase?');
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


function createPass(array) {
    var len = prompt('What is you pw length?');
    var arrayPass = [];
    // While there remain elements to shuffle...
    for(var i =0; i < len ; i++){
    // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * (array.length-1));

      var randVal = array[randomIndex];
      arrayPass.push(randVal);
      length-=1;
    }
    // alert(arrayPass.join(""));
    var outPut = arrayPass.join("");
    alert(outPut);
  }
  
    // function copyPass() {
//     /* Get the text field */
     var copyText = document.querySelector(#passWd);
  
//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
//     /* Copy the text inside the text field */
//     document.execCommand("copy");
  
//     /* Alert the copied text */
//     alert("Copied the text: " + copyText.value);
//   }


/* first event */
// change this pw into a dynamic random pw
//document.write(pw);