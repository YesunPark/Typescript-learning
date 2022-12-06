//object의 타입을 선언할 때 쓰는 방법
//제한된 양의 property 혹은 key를 가지는 타입을 정의해주는 방법
//Words 타입이 string만을 property로 가지는 오브젝트라고 정해준 것.
type Words = {
  [key: string]: string;
};

//type Word를 사용한 예시
let dict: Words = {
  potato: "food",
};

class Dict {
  private words: Words; //이것만 선언하면 initializer가 없고 constructor에서 정의되지 않았다는 에러 발생
  //     constructor(words) {  => 우리가 원하는 건 constructor가 word를 지정해주는 것이 아니다.
  //       this.words = {}
  //   }
  constructor() {
    //그래서 words를 initializer없이 선언 후 constructor에서 수동으로 초기화
    this.words = {};
  }
  add(word: Word) {
    //클래스를 타입으로 지정
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dic = new Dict();

dic.add(kimchi);
dic.def("kimchi"); //실행하면 '한국의 음식'이 리턴됨

//단어 삭제, 단어 업뎃 메서드 만들기
//Word클래스에는 단어 정의를 추가하거나 수정하는 메서드, 단어를 출력하는 메서드 만들기
//클래스, 메서드, private, public등을 사용해서 뭔갈 만들어보기
