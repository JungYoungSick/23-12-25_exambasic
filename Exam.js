class ForExam {
  //! 클래스 문법을 사용함.
  constructor() {
    //! cpnstructor 클래스와 객체를 다룰 때 사용되며, 객체의 상태를 초기화하거나 필수 속성을 설정하는 역할을 함.
    this.initData()
    //! this를 사용한 initData 함수를 가르킨다.
    //? this란 객체를 가리킬 때 쓰이는 함수나 메서드를 가르킬 떄 쓰인다.
  }

  initData() {

    const config = {
      baseArray: ['피카츄', '라이츄', '꼬부기'],
      specialProblems: [10, 16, 17, 18, 19, 20],
      htmlTagProblems: [22, 23, 25, 27, 29, 30],
      startProblemIndex: 1,
      endProblemIndex: 30
    };

    for (let i = config.startProblemIndex; i <= config.endProblemIndex; i++) {
      this['problem' + i] = this.generateProblemData(
        i,
        config.baseArray,
        config.specialProblems
      );
    }

    this.problem16 = [['피카츄', '라이츄'], ['꼬부기', '이브이']];

    this.assembleHTMLTags(config.htmlTagProblems);
  }

  generateProblemData(problemNumber, baseArray, specialProblems) {
    if (specialProblems.includes(problemNumber)) {
      return [...baseArray, '이브이'];
    }
    return baseArray.slice();
  }

  assembleHTMLTags(htmlTagProblems) {
    for (let problem of htmlTagProblems) {
      this['problem' + problem] = this['problem' + problem].map(item => {
        if (item.includes('<')) {
          return item;
        }
        return `<li>${item}</li>`;
      });
    }
  }
}

let forExam = new ForExam();
console.dir(forExam);