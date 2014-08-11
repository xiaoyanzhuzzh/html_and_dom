function Get_scores() {
  var scores = 0;
  scores =  fullInTopics() + choiceTopics() + multipleChoiceTopics()
            + trueOrFalseTopics() + shortAnswerTopics();
  document.getElementById("scores").value = scores;
  return false;
}

function  fullInTopics(){
  var fullInSubject1 = new Subject('fullInSubject',['统一建模语言'],1,5);
  var fullInSubject2 = new Subject('fullInSubject',['继承性','多态性','封装性'],3,5);

  var value1_1_1 = document.getElementById('1_1_1').value;
  if(value1_1_1 == fullInSubject1.answer[0]){
    fullInSubject1.scores += fullInSubject1.scorePerSubject;
  }

  var value1_2 = [];
  value1_2.push(document.getElementById('1_2_1').value);
  value1_2.push(document.getElementById('1_2_2').value);
  value1_2.push(document.getElementById('1_2_3').value);

  for(var i = 0; i < fullInSubject2 .answer.length; i++){
    for(var j = 0;j < value1_2.length; j++){
      if(fullInSubject2.answer[i] == value1_2[j]){
        fullInSubject2.scores +=  fullInSubject2.scorePerSubject;
        break;
      }
    }
  }
  return fullInSubject1.scores + fullInSubject2.scores;
}

function choiceTopics(){
  var choiceSubject = new Subject('choiceSubject',['B','A'],2,10);

  var choiceSubject1 = new ChoiceSubject('radio_ans_1');
  var value1 = choiceSubject1.calculation();
  var choiceSubject2 = new ChoiceSubject('radio_ans_2');
  var value2 = choiceSubject2.calculation();
  var value = [value1,value2];

  for(var i = 0; i < value.length; i++){
    if(value[i] == choiceSubject.answer[i]){
      choiceSubject.scores += choiceSubject.scorePerSubject;
    }
  }
  return choiceSubject.scores;
}

function multipleChoiceTopics(){
  var multipleChoiceSubject = new Subject('multipleChoiceSubject',
  [['A','B','D'],['A','B','C']],2,10);

  var multipleChoiceSubject1 = new MultipleChoiceSubject('check_ans_1');
  var value1 = multipleChoiceSubject1.calculation();
  var answer1 = multipleChoiceSubject.answer[0];
  if(answer1.length == value1.length){
    var diffA = _.difference(value1,answer1);
    if(_.isEmpty(diffA)){
        multipleChoiceSubject.scores += multipleChoiceSubject.scorePerSubject;
    }
  }

  var multipleChoiceSubject2 = new MultipleChoiceSubject('check_ans_2');
  var value2 = multipleChoiceSubject2.calculation();
  var answer2 = multipleChoiceSubject.answer[1];
  if(answer2.length == value2.length){
    var diffB = _.difference(value2,answer2);
    if(_.isEmpty(diffB)){
          multipleChoiceSubject.scores += multipleChoiceSubject.scorePerSubject;
    }
  }
  return multipleChoiceSubject.scores;
}

function trueOrFalseTopics(){
  var trueOrFalseSubject = new Subject('trueOrFalseSubject',['no','yes'],2,10);
  var trueOrFalseSubject1 =new ChoiceSubject('ans_1');
  var value1 = trueOrFalseSubject1.calculation();
  var trueOrFalseSubject2 =new ChoiceSubject('ans_2');
  var value2 = trueOrFalseSubject2.calculation();
  var value = [value1,value2];

  for(var i = 0; i < value.length; i++){
    if(value[i] ==  trueOrFalseSubject.answer[i]){
       trueOrFalseSubject.scores +=  trueOrFalseSubject.scorePerSubject;
    }
  }
  return trueOrFalseSubject.scores;
}

function shortAnswerTopics(){
  var shortAnswerSubject = new Subject(shortAnswerSubject,
    ['模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。'],
    1,20);
  var value5 = document.getElementById("5").value;
  if( value5 == shortAnswerSubject.answer[0]){
    shortAnswerSubject.scores = shortAnswerSubject.scorePerSubject;
  }
  return shortAnswerSubject.scores;
}
