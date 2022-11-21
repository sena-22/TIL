function Character(name, level) {
  //인스턴스 초기화
  this.name = name;
  this.level = level;
  this.lvUp = function () {
    return level + 1;
  };
}

//인스턴스 생성
const character1 = new Character("2b", 1);

/* new.target */

// function Character(name,level) {
// 	if (!new.target) { //함수가 new와 호출되지 않았다면 new.targe은 undefined이다.
// 		return new Character(name,level);
// }
// 	this.name = name;
// 	this.level = level;
// 	this.lvUp = function() {
// 		return level + 1;
// 	};
// };

// const character1 = Character('2b',1); //Character {name: '2b', level: 1, lvUp: ƒ}
// //new가 없어도 있는 것처럼 동작한다.
