// 合計値
total = 0;
// 入力された値
input_value = "";
// 一つ前の演算子
before_operator = "";
// =かどうかを判定するフラグ
equal_flag = false;


function value_push(value){// 0～9を押した
  input_value += value;
  document.myForm.myLine.value = input_value;
}

function calculate(operator){
  // 引数のoperatorが＝か他の演算子かを判定する
  if(operator === "=") {
    equal_flag = true;
  }
  // 数値型にするため
  input_value = parseInt(input_value,10);

  // 一つ前の演算子がない場合は（一つ目の演算子が押された場合のこと）
  if(before_operator === "") {
    total = parseInt(input_value,10);
  } else if(before_operator === "+") {
    total = total + input_value;
  } else if(before_operator === "-") {
    total = total - input_value;
  } else if (before_operator === "*") {
    total = total * input_value;
  } else if (before_operator === "/") {
    total = total / input_value;
  }

  // ＝が押された時とそうでない時で分ける
  // 一つ前の演算子の値と表示されている値をリセットするため
  // ＝である場合
  if(equal_flag === true) {
    equal_flag = false;
    document.myForm.myLine.value = total;
  // =でない場合はリセットする(totalとinput_value)
  } else {
    before_operator = "";
    input_value = "";
    before_operator = operator;
    document.myForm.myLine.value = total;
  }

}

// clear関数リセットを押された時に
function ac() {
  total = 0;
  input_value = "";
  before_operator = "";
  equal_flag = false;
  document.myForm.myLine.value = "0";
}



















