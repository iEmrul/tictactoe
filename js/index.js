var activePlayer, notclicked, currentPlayer, me, comp;
var previous = 0;
$(".message").text("Please select your symbol");
$("#x").click(function(){
  notclicked = 0;
  me = "X";
  comp = "O";
  $("#o").attr("disabled", "true");
  $("#x").attr("disabled", "true");
  $("#0").removeAttr("disabled");
  $("#1").removeAttr("disabled");
  $("#2").removeAttr("disabled");
  $("#3").removeAttr("disabled");
  $("#4").removeAttr("disabled");
  $("#5").removeAttr("disabled");
  $("#6").removeAttr("disabled");
  $("#7").removeAttr("disabled");
  $("#8").removeAttr("disabled"); 
});
$("#o").click(function(){
  notclicked = 0;
  me = "O";
  comp = "X";
  $("#x").attr("disabled", "true");
  $("#o").attr("disabled", "true");
  $("#0").removeAttr("disabled");
  $("#1").removeAttr("disabled");
  $("#2").removeAttr("disabled");
  $("#3").removeAttr("disabled");
  $("#4").removeAttr("disabled");
  $("#5").removeAttr("disabled");
  $("#6").removeAttr("disabled");
  $("#7").removeAttr("disabled");
  $("#8").removeAttr("disabled"); 
});
$("#r").click(function(){
  clearBoard();
  $(".message").text("Please select your symbol");
});
if(!notclicked){
  $("#0").attr("disabled", "true");
  $("#1").attr("disabled", "true");
  $("#2").attr("disabled", "true");
  $("#3").attr("disabled", "true");
  $("#4").attr("disabled", "true");
  $("#5").attr("disabled", "true");
  $("#6").attr("disabled", "true");
  $("#7").attr("disabled", "true");
  $("#8").attr("disabled", "true"); 
}
var board = {
  "0": "",
  "1": "",
  "2": "",
  "3": "",
  "4": "",
  "5": "",
  "6": "",
  "7": "",
  "8": ""  
};

$("#0").click(function(){
  toggler("0");
  result();
});
$("#1").click(function(){
  toggler("1");
  result();
});
$("#2").click(function(){
  toggler("2");
  result(); 
});
$("#3").click(function(){
  toggler("3");
  result();
});
$("#4").click(function(){
  toggler("4");
  result();
});
$("#5").click(function(){
  toggler("5");
  result(); 
});
$("#6").click(function(){
  toggler("6");
  result(); 
});
$("#7").click(function(){
  toggler("7");
  result(); 
});
$("#8").click(function(){
  toggler("8");
  result();
});

function computerPick(){
  var arr = [];
  for(var x in board){
    if(board[x] === ""){
      arr.push(x);
    }
  }
  var choice = Math.floor(Math.random()*(arr.length));
  var pick = arr[choice];
  return pick;
  };

function toggler(value){
  if(previous === 0){
    $("#"+value).text(me); 
    board[value] = me;
    $("#"+value).attr("disabled","true");
    previous = 1;
    toggler();
  }
  else{
    
    var input = computerPick();
    console.log("computer choice " + input);
    $("#"+input).text(comp); 
    board[input] = comp;
    $("#"+input).attr("disabled","true");
    previous = 0;
  }
}

function result(){
  var output = "";
  if((board["0"] === "X" && board["1"] === "X" && board["2"] === "X") ||
     (board["3"] === "X" && board["4"] === "X" && board["5"] === "X") ||
     (board["6"] === "X" && board["7"] === "X" && board["8"] === "X") ||
     (board["0"] === "X" && board["3"] === "X" && board["6"] === "X") ||
     (board["1"] === "X" && board["4"] === "X" && board["7"] === "X") ||
     (board["2"] === "X" && board["5"] === "X" && board["8"] === "X") ||
     (board["0"] === "X" && board["4"] === "X" && board["8"] === "X") ||
     (board["2"] === "X" && board["4"] === "X" && board["6"] === "X") 
    ){
      output = "X";
      clearBoard();
  }
  else if((board["0"] === "O" && board["1"] === "O" && board["2"] === "O") ||
     (board["3"] === "O" && board["4"] === "O" && board["5"] === "O") ||
     (board["6"] === "O" && board["7"] === "O" && board["8"] === "O") ||
     (board["0"] === "O" && board["3"] === "O" && board["6"] === "O") ||
     (board["1"] === "O" && board["4"] === "O" && board["7"] === "O") ||
     (board["2"] === "O" && board["5"] === "O" && board["8"] === "O") ||
     (board["0"] === "O" && board["4"] === "O" && board["8"] === "O") ||
     (board["2"] === "O" && board["4"] === "O" && board["6"] === "O") 
    ){
      output = "O";
      clearBoard();
  }
  else{
    output = "tie";
  }
  
  if(output === "X"){
   if(me === "X"){
     $(".message").text("You have won the game , Select Your symbol");
   }
  else if(comp === "X"){
     $(".message").text("Computer has won the game , Select Your symbol");
   }
    
  }
  else if(output === "O"){
    if(me === "O"){
      $(".message").text("You have won the game, Select Your symbol");
    }
    else if(comp === "O"){
      $(".message").text("Computer has won the game, Select Your symbol");
    }
    
  }
  else{
  if(checkEmpty()){
    $(".message").text("Keep Playing");
  }
    else{
      $(".message").text("Its a tie");
    }
  }

}

function clearBoard(){
  board["0"] = "";
  board["1"] = "";
  board["2"] = "";
  board["3"] = "";
  board["4"] = "";
  board["5"] = "";
  board["6"] = "";
  board["7"] = "";
  board["8"] = "";
  $("#0").text("");
  $("#1").text("");
  $("#2").text("");
  $("#3").text("");
  $("#4").text("");
  $("#5").text("");
  $("#6").text("");
  $("#7").text("");
  $("#8").text("");
  $("#0").attr("disabled", "true");
  $("#1").attr("disabled", "true");
  $("#2").attr("disabled", "true");
  $("#3").attr("disabled", "true");
  $("#4").attr("disabled", "true");
  $("#5").attr("disabled", "true");
  $("#6").attr("disabled", "true");
  $("#7").attr("disabled", "true");
  $("#8").attr("disabled", "true"); 
  $("#o").removeAttr("disabled");
  $("#x").removeAttr("disabled");
  
}

function checkEmpty(){
  if(board["0"] === "" || board["1"] === "" || board["2"] === "" ||
     board["3"] === "" || board["4"] === "" || board["5"] === "" ||
     board["6"] === "" || board["7"] === "" || board["8"] === "" ){
    return true;
  }
  else{
    return false;
  }
}