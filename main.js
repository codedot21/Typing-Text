let target = document.querySelector("#dynamic");

function randomString() {
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript"];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  // Math.floor를 넣어 소수점으로 나오던 숫자를 3을 넘지 않는 랜덤한 숫자가 나오게 됨
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

// 타이핑 리셋
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}
dynamic(randomString());

//커서 깜빡임 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);
