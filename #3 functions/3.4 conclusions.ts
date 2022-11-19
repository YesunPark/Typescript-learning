function superPrint4<T>(a: T[]) {
	return a[0];
}

const superPrint4_1 = <T>(a: T[]) => a[0];

superPrint4([1, 2, 3, 4]);
superPrint4([1, 2, 3, '4']);
superPrint4([true, false, true, 1]);
//만약 더 명시적으로 작성하고 싶다면 아래 방법처럼 작성
superPrint4<boolean>([true, false, false]);

superPrint4_1([1, 2, 3, 4]);
superPrint4_1([true, false, true, 1]);
///////////////////////////////////////////////////////////
type Player<E> = {
	name: string;
	extraInfo: E;
};

type NicoExtra = {
	favFood: string;
};

type NicoPlayer = Player<NicoExtra>;

const nico: NicoPlayer = {
	name: 'nico',
	extraInfo: {
		favFood: 'kimchi',
	},
};

const lynn: Player<null> = {
	name: 'lynn',
	extraInfo: null,
};
//위에서부터 아래로 쭉쭉 코드가 확장됨.
//제네릭을 사용해서 원하는대로 코드의 확장 가능
//또, 제네릭을 사용해서 Player타입을 재사용함

///////////////////////////////////////////////////////////
//대부분의 타입스크립트의 타입은 제네릭으로 만들어짐
type A = Array<number>; // = number[];

let a: A = [1, 2, 3];
