//! 배열의 모든 요소를 대문자로 변환하세요.
const problem1 = ['피카츄', '라이츄', '꼬부기']

const result = problem1.map(Element => Element.toUpperCase());

console.log(result)

//? 입력 시 배열 안의 값이 한글 문자열로 되어있어 출력 시 대문자로 변환이 되지 않은 것 같다.