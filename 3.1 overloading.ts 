//call signature들의 파라미터의 개수가 다를 경우
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
