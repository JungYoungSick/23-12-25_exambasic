//! 배열에서 이름에 '이'가 포함된 포켓몬만 필터링하세요.
const problem2 = ['피카츄', '라이츄', '꼬부기']

const nameFilter = problem2.filter(nameClass => nameClass.includes('이'));

console.log(nameFilter)

//? 사용한 배열 매서드는 filter와 includes를 사용하였다.
//? inclues(배열이 특정 요소를 포함하고 있는지 판별하는 매서드)를 사용하여 "이"를 찾아내었다.