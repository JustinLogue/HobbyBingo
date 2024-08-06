function bootUp(){
    // html1= `<p>Free!</p>`
    // $("#13").append(html1);
    // document.getElementById("free").innerHtml="Free!";
    // document.getElementsByClassName("13").innerHtml="Free!";
    console.log("boot up test!")

};

bootUp();

function addToList(){
    var newChore = document.getElementById('chores').value;
    console.log(newChore);
    choreList.push(newChore);
    console.log(choreList);
    $("#counter").empty();
    var htmlcount = `<p>${choreList.length}</p>`
    $('#counter').append(htmlcount);
}

var choreList=[];


var numbers = new Array(25);
var DuplicateChecker =new Array(25);
console.log(numbers);
console.log(numbers.length);
console.log(choreList.length);
numberOfChores= choreList.length;
console.log(numberOfChores);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

function pickChores(){
    if(choreList.length<25){
        alert("Error, you need at least 24 chores to fill card!")
    }
    else{
        const bingoCard = document.querySelector('.bingoCard');
        bingoCard.style.display = "grid";
        for(var i =0; i < numbers.length; i++){
            var chore = getRandomInt(choreList.length);
            while(DuplicateChecker.includes(chore) == true){
                console.log("error try again!");
                chore = getRandomInt(choreList.length);
            }
            DuplicateChecker[i]=chore;
            if(i == 12){
                html1= `<p>Free!</p>`
                $("#13").append(html1);
            }
            else{
                console.log(choreList[chore])
                numbers[i]= choreList[chore];
                html1= `<p>${numbers[i]}</p>`
                $(`#${i+1}`).append(html1);
            }
        }
    }
    console.log(numbers)
    console.log(DuplicateChecker)
};

 