
function Get_scores() {
  var score1 = Get_Score1();

  var score2_1 = Get_Score2_1();
  var score2_2 = Get_Score2_2();

  var score3_1 = Get_Score3_1();
  var score3_2 = Get_Score3_2();

  var score4_1 = Get_Score4_1();
  var score4_2 = Get_Score4_2();


  var score5 = Get_Score5();

  var scores = 0;
  scores = score1 + score2_1 +score2_2 + score3_1 +score3_2 + score4_1 + score4_2 + score5;

  document.getElementById("scores").value = scores;
  return false;

}

function Get_Score1() {
  var score1_1 = 0;
  var value1_1_1 = document.getElementById("1_1_1").value;
  if (value1_1_1 == "统一建模语言"){
      score1_1 += 5;
  }

  var score1_2 = 0;
  var answer = ["继承性","多态性","封装性"];
  var value = [];
  value.push(document.getElementById("1_2_1").value);
  value.push(document.getElementById("1_2_2").value);
  value.push(document.getElementById("1_2_3").value);

  for (var i = 0; i < answer.length; i++){
    for (var j = 0;j < value.length; j++) {
      if(answer[i] == value[j]){
        score1_2 += 5;
        break;
      }
    }
  }
  return score1_1 + score1_2;
}

function Get_Score2_1() {
  var score2_1 = 0;
  if(document.getElementById("2_1_2").checked){
    score2_1 +=10;
  }
  return score2_1;
}

function Get_Score2_2() {
  var score2_2 = 0;
  if(document.getElementById("2_1_2").checked){
    score2_2 +=10;
  }
  return score2_2;
}

function Get_Score3_1() {
  var score3_1 = 0;
  if(!document.getElementById("3_1_3").checked){
    var yes1 = document.getElementById("3_1_1").checked;
    var yes2 = document.getElementById("3_1_2").checked;
    var yes3 = document.getElementById("3_1_4").checked;
    if(yes1 && yes2 && yes3){
         score3_1 += 10;
      }
  }
  return score3_1;
}

function Get_Score3_2() {
  var score3_2 = 0;
  if(!document.getElementById("3_2_4").checked){
    var yes1 = document.getElementById("3_2_1").checked;
    var yes2 = document.getElementById("3_2_2").checked;
    var yes3 = document.getElementById("3_2_3").checked;
    if(yes1 && yes2 && yes3){
         score3_2 += 10;
      }
  }
  return score3_2;
}

function Get_Score4_1() {
  var score4_1 = 0;
  if(document.getElementById("4_1_2").checked){
    score4_1 +=10;
  }
  return score4_1;
}

function Get_Score4_2() {
  var score4_2 = 0;
  if(document.getElementById("4_2_1").checked){
    score4_2 +=10;
  }
  return score4_2;
}

function Get_Score5() {
  var score5 = 0;
  var value5 = document.getElementById("5").value;
   if (value5 == "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。"){
       score5 += 20;
     }

       return score5;
 }
