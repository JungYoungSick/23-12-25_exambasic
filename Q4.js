//! 배열을 사용하여 각 포켓몬의 이름을 키로, 이름의 길이를 값으로 하는 객체를 생성하세요.
const problem4 = ['피카츄', '라이츄', '꼬부기']

const PokemonData = problem4.map(name => ({ key: name, age: name.length }))

console.log(PokemonData)

//? 배열 매서드 중 map을 사용하여 problem4의 이름을 불러와 key값으로 넣었고, age는 이름의 길이로 지정하여 값을 출력하였다.

//? Map() => 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새 배열로 반환하는 메서드이다.