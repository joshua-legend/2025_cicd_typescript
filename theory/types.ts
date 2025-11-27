// const a1: any = [{ name: "영철" }, { age: 21 }];
// 절대 존재하지 않는 타입
// const a2:never =
// const a3: Function = () => 123;
// const sum = (x: number, y: number) => x + y;
// const a4:unknown

// 숫자를 넣으면 불리언으로 돌려주는 함수 정의
const c1 = (num: number): boolean => !!num;
// 숫자를 넣으면 문자화 돌려주는 함수 정의
const c2 = (num: number): string => String(num);
