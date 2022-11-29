//❕❕❕typesecript로 클래스를 만드는 방법
//private, public에 따라 타스가 보호를 해줌.
//참고) 박기빈 출처. 다시 찾아보기 -> private는 항목에 쓰고 public은 함수에 사용.

class Player4_0 {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

const nico4_0 = new Player4_0("nico", "las", "nicco");

// nico4_0.firstName; -> private으로 설정했기 때문에 오류
nico4_0.nickname; //오류X

///////////////////////////////////////////////////////////////////
//❕❕❕추상클래스
//1. 추상클래스: 오직 다른 곳(클래스)에서 상속받을 수만 있는 클래스.
//추상클래스는 다른 클래스가 상속받을 수 있는 클래스이다. 그러나 직접
//new 키워드를 이용해서 인스턴스를 만들수는 없다.
//new User -> 추상 클래스의 인스턴스를 만들 수 없습니다.라는 오류 발생

//2. private 및 public은 property뿐 아니라 method에서도 작동

abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  //추상클래스 안에 있는 메소드
  //만약 private을 앞에 붙이면 nico4_1.getFullName()사용 불가.
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player4_1 extends User {}

const nico4_1 = new Player4_1("nico", "las", "nico");

nico4_1.getFullName(); //private이 붙으면 에러남

///////////////////////////////////////////////////////////////////
//❕❕❕추상클래스 안에서는 추상 메서드를 만들 수 있음.
//하지만 메서드를 구현하지말고 메서드의 call signature만 작성해야함.
//추상메서드: 추상클래스를 상속받는 모든 것들이 구현해야하는 메서드.⭐️

abstract class User2 {
  constructor(
    protected firstName: string, //protected-여전히 클래스 밖에서는 접근 불가이지만 자식클래스에서는 접근 가능.
    private lastName: string,
    private nickname: string
  ) {}
  abstract getNickName(): void; //이건 메서드의 call signature만 가지고있음.(argument도 추가가능)
  //추상클래스 안에 있는 메소드
  //만약 private을 앞에 붙이면 nico4_1.getFullName()사용 불가.
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player4_2 extends User2 {
  getNickName(): void {
    console.log(this.firstName); //User2클래스를 상속받았고, firstName이 protected이기 때문에 접근 가능
  }
}

//용어 더 자세히 알아볼 것: private, public, 추상클래스, 인스턴스
