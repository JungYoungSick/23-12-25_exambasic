//! 배열을 알파벳 순서대로 정렬하세요.(한글이기에 한글순서대로 정리 방법을 알아보았다.)
const problem5 = ['피카츄', '라이츄', '꼬부기']

const SortArray = problem5.sort((a, b) => a.localeCompare(b, 'ko-KR'));

console.log(SortArray)

//? 배열 매서드 중 sort를 사용하여 이름순서대로 정렬 하였다.
//? sort() => 배열의 요소를 적절한 위치에 정렬하는 메서드이다.
//? 그리고 localeCompare를 사용하여 언어를 선택하주었다.