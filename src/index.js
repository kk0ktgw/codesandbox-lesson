/**
 * let、const変数宣言
 従来の変数宣言はvarのみだったが、変数を上書きできたり、再宣言が可能なため、大規模な開発においてはネックになることもあった。
それを解消するために、2015年のECMAスクリプトの改定で追加された変数の宣言。
 */

var val1 = "var変数";
console.log(val1);

//var変数は上書き可能
val1 = "val変数を上書き";
console.log(val1);

//var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

//letは上書き可能な変数宣言
let val2 = "let変数";
console.log(val2);

val2 = "let変数を上書き";
console.log(val2);

//let val2  "let変数を再宣言";エラーになる

const val3 = "const変数";
console.log(val3);

//val3 = "const変数は上書き不可能";error

//const val3 = "const変数を再宣言";error

/**
 * constで定義したobjectはプロパティの変更が可能
 */
const val4 = {
  name: "しばたろう",
  age: 9
};
val4.name = "しいちゃん";
val4.address = "岐阜";
console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
