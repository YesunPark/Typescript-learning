//////////////////////////////////////////////////////////////////////////////
//πμ΄λ€ νμμ΄λ μ§ λ€μ΄κ° μ μλ λ°°μ΄μ μΈμλ‘ λ°κ³ ,
//λ¦¬ν΄κ° μμ΄ μ½μλ§ μ°λ ν¨μ, superPrint

type SuperPrint = {
	//<>μμ μ΄λ¦μ λ§μλλ‘ μ§μ΄λ λ¨.
	//<T>λΌκ³  λ§μ΄ μ¬μ©νλλ° μ΄λ€ κ²μ΄λ  μκ΄μμ.
	<TypePlaceHolder>(arr: TypePlaceHolder[]): void;
	// (arr: any[]):void;
};

const superPrint: SuperPrint = (arr) => {
	arr.forEach((i) => console.log(i));
};

//genericμ μ¬μ©νκΈ° λλ¬Έμ νμμ€ν¬λ¦½νΈκ° ν¨μμ νμμ μ μΆν΄μ€(superPrintμ λ§μ°μ€ μ¬λ €λ³΄κΈ°)
superPrint([1, 2]);
superPrint([true, true, false]);
superPrint(['a', 'b', 'c']);
superPrint([1, true, 'a']);

//β­β­β­μ΄λ,	<TypePlaceHolder>(arr: TypePlaceHolder[]): void; λμ  (arr: any[]):void;λΌκ³  νλ€λ©΄
//ν¨μλ₯Ό νΈμΆνμ λ νμμ€ν¬λ¦½νΈκ° μΈμλ€μ νμμ μ μΆν΄μ£Όμ§ μκ³ 
//const superPrint: (arr: any[]) => void μ΄λ κ² λνλ΄μ€λ€.

//////////////////////////////////////////////////////////////////////////////
// πsuperPrintκ° λ¦¬ν΄κ°μ κ°μ§λλ‘ μμ ν ν¨μ, superPrint2

type SuperPrint2 = {
	//<>μμ μ΄λ¦μ λ§μλλ‘ μ§μ΄λ λ¨.
	//<T>λΌκ³  λ§μ΄ μ¬μ©νλλ° μ΄λ€ κ²μ΄λ  μκ΄μμ.
	<TypePlaceHolder>(arr: TypePlaceHolder[]): TypePlaceHolder;
	// (arr: any[]):void;
};

const superPrint2: SuperPrint2 = (arr) => arr[0];

//suprePrint2μ λ§μ°μ€ μ¬λ €λ³΄κΈ°
superPrint2([1, 2]);
superPrint2([true, true, false]);
superPrint2(['a', 'b', 'c']);
superPrint2([1, true, 'a']);
