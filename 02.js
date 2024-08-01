// ## 2. 스코프
// 1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName(); // yuno2 -> myName() 안에서 yuno2로 재정의 되고 a()는 myName() 스코프 내에 있다


// 2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test(); // 2 -> if문에서 재정의 해주고 var는 함수 스코프를 가지기 때문


// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수: ${this.name} `);
    };
    function normal() {
      console.log(`일반 함수: ${this.name} `);
    }
    arrow();
    normal();
  }
};

nameObj.method();

// 화살표 함수는 자신의 this 값을 가지고 있지 않는다. 따라서 상위 스코프에 있는 this를 상속 따라서 yuno 출력
// 일반 함수는 호출될 때 전역 스코프에서 호출된 것으로 간주한다. 따라서 undefined 출력