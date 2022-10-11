/**
 * 디스트럭처링 할당(구조 분해 할당)
 * 구조화된 배열과 같은 이터러블 또는 객체를 비구조화하여 1개 이상의 변수에 개별적으로 할당하는 것
 */

// 1. 배열 디스트럭처링 할당

//ES5의 경우
let arr = [1, 2, 3];

let 하나 = arr[0];
let 둘 = arr[1];
let 셋 = arr[2];

console.log(하나, 둘, 셋); //1,2,3

//ES6의 디스트럭처링 할당
let arr2 = [4, 5, 6];

//좌변에는 변수를 배열 리터럴 형태로 선언하고, 우변에는 이터러블을 할당한다.
let [넷, 다섯, 여섯] = arr2;

console.log(넷, 다섯, 여섯); //4,5,6

//2. 객체 디스트럭처링 할당

//ES5의 경우
let user = { firstName: "Jack", lastName: "Poster" };

let firstName = user.firstName;
let lastName = user.lastName;

console.log(firstName, lastName); //Jack Poster

//ES6의 디스트럭처링 할당
const user2 = { firstName2: "Jack", lastName2: "Poster" };

//좌변에 변수를 객체 리터럴 형태로 선언
const { lastName2, firstName2 } = user2;

console.log(firstName2, lastName2); //Jack Poster
