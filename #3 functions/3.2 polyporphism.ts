//////////////////////////////////////////////////////////////////////////////
//📜어떤 타입이든지 들어갈 수 있는 배열을 인자로 받고,
//리턴값 없이 콘솔만 찍는 함수, superPrint

type SuperPrint = {
	//<>안의 이름은 마음대로 지어도 됨.
	//<T>라고 많이 사용하는데 어떤 것이든 상관없음.
	<TypePlaceHolder>(arr: TypePlaceHolder[]): void;
	// (arr: any[]):void;
};

const superPrint: SuperPrint = (arr) => {
	arr.forEach((i) => console.log(i));
};

//generic을 사용했기 때문에 타입스크립트가 함수의 타입을 유추해줌(superPrint에 마우스 올려보기)
superPrint([1, 2]);
superPrint([true, true, false]);
superPrint(['a', 'b', 'c']);
superPrint([1, true, 'a']);

//⭐⭐⭐이때,	<TypePlaceHolder>(arr: TypePlaceHolder[]): void; 대신 (arr: any[]):void;라고 한다면
//함수를 호출했을 때 타입스크립트가 인자들의 타입을 유추해주지 않고
//const superPrint: (arr: any[]) => void 이렇게 나타내준다.

//////////////////////////////////////////////////////////////////////////////
// 📜superPrint가 리턴값을 가지도록 수정한 함수, superPrint2

type SuperPrint2 = {
	//<>안의 이름은 마음대로 지어도 됨.
	//<T>라고 많이 사용하는데 어떤 것이든 상관없음.
	<TypePlaceHolder>(arr: TypePlaceHolder[]): TypePlaceHolder;
	// (arr: any[]):void;
};

const superPrint2: SuperPrint2 = (arr) => arr[0];

//suprePrint2에 마우스 올려보기
superPrint2([1, 2]);
superPrint2([true, true, false]);
superPrint2(['a', 'b', 'c']);
superPrint2([1, true, 'a']);
