//오버로딩이란? 함수가 여러개의 call signature을 갖고 있는 것
//👩‍💻
type Config = {
	path: string;
	state: object;
};

type Push = {
	(path: string): void; //void: 아무것도 리턴하지 않는 것
	(config: Config): void;
};

//이때 config의 타입은 string | Config
const push: Push = (config) => {
	//타입이 string일 때
	if (typeof config === 'string') {
		console.log(config);
	}
	//타입이 Config일 때
	else {
		console.log(config.path); //또는 config.state도 가능
	}
};

///////////////////////////////////////////////////////////////////////////

//👩‍💻call signature들의 파라미터의 개수가 다를 경우
//자주 있는 경우는 아님

//ex1
type Add = {
	(a: number, b: number): number;
	(a: number, b: number, c: number): number; //c는 옵션
};
const add: Add = (a, b, c?: number) => {
	if (c) return a + b + c;
	return a + b;
};

//ex2
type Add2 = {
	(a: number, b: number, c?: number): number; //c는 옵션
};
const add2: Add2 = (a, b, c) => {
	if (c) return a + b + c;
	return a + b;
};
