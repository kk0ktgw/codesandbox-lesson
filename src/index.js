/**
 * let、const変数宣言
 従来の変数宣言はvarのみだったが、変数を上書きできたり、再宣言が可能なため、大規模な開発においてはネックになることもあった。
それを解消するために、2015年のECMAスクリプトの改定で追加された変数の宣言。
 */

// var val1 = "var変数";
// console.log(val1);

//var変数は上書き可能
// val1 = "val変数を上書き";
// console.log(val1);

//var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

//letは上書き可能な変数宣言
// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

//let val2  "let変数を再宣言";エラーになる

// const val3 = "const変数";
// console.log(val3);

//val3 = "const変数は上書き不可能";error

//const val3 = "const変数を再宣言";error

/**
 * constで定義したobjectはプロパティの変更が可能
 */
// const val4 = {
//   name: "しばたろう",
//   age: 9
// };
// val4.name = "しいちゃん";
// val4.address = "岐阜";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
const name = "しばたろう";
const age = 9;

従来の方法;
const message1 = "私の名前は、" + name + "。年齢は、" + age + "才です。";
console.log(message1);
テンプレート文字列を使った方法;
const message2 = `私の名前は、${name}。年齢は${age}才です。`;
console.log(message2);

/**
 * アロー関数
 */
//従来の関数の書き方
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));
//アロー関数の書き方
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));
//returnのような単一式の場合、returnを省略できる。
// const func2 = (str) => str;
// console.log(func2("func2です。"));
// const func3 = (num1,num2) => {
//   return num1+num2;
// }
//簡略な書き方
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 12));

/**
 *分割代入
 */
// const myProfile = {
//   name: "しばたろう",
//   age: 9
// };
//普通の書き方
// const message1 = `私の名前は${myProfile.name}です。年は${myProfile.age}才です。`;
//
//分割代入
// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年は${age}才です。`;
// console.log(message2);
//普通の書き方
// const myProfile = ["しばたろう", 9];
// const message3 = `私の名前は${myProfile[0]}です。年は${myProfile[1]}才です。`;
// console.log(message3);
//分割代入
// const myProfile = ["しばたろう", 9];
// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年は${age}才です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんちには${name}さん。`);
// sayHello();

/**
 * スプレッド構文
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); //順番に処理する
//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);
//配列のコピーや結合
// const arr3 = [10, 20];
// const arr4 = [30, 40];
// const arr5 = [...arr4];
// console.log(arr5);
// const arr6 = [...arr3, ...arr4];
// console.log(arr6);
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);//コピーすると参照を引継ぎ、arr8同様にarr4まで描き変わってしまう
// const arr8 = [...arr4];
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4); //arr8とarr4が別々の数値を持っている

/**
 * map,filterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "林"];
//従来の配列の処理
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
//mapを使った場合の処理
// const nameArr2 = nameArr.map((name)=>{ //mapの基本構文。returnされた結果に基づいて新しい配列を生成する使い方⓵
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name)); //配列をループして関数内で処理する②

//filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

const nameArr = ["田中", "山田", "林"];
//従来の書き方
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}さんです。`);
// }
//mapでの書き方
// nameArr.map((name, index) =>
//   console.log(`${index + 1}番目は${name}さんです。`)
// );
const newNameArr = nameArr.map((name) => {
  if (name === "林") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
