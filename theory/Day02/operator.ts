// mapped
type Magician = {
  name: string;
  skills: string[];
  lineage: boolean;
};
// keyof 연산자: key값들을 추출하기
type mk = keyof Magician;
// indexed 연산자: value 타입값들을 추출하기
type skill = Magician["skills"];
// typeof 연산자: 변수의 타입 추출하기
const park = { name: "박신율", age: 30, nation: "뉴질랜드" };
type P = typeof park;

// in 연산자
type MyType = {
  [K in "korea" | "japan"]: string;
};
const nation: MyType = {
  korea: "한국",
  japan: "일본",
};

type Application = "kakao" | "line" | "telegram";
type Messager = {
  [K in Application]: string[];
};

const nation2: Messager = {
  kakao: ["고구려"],
  line: ["일본", "동남아"],
  telegram: ["캄보디아"],
};

type Nation = { name: string; population: number; phone: number };
type N = {
  [K in keyof Nation]: Nation[K];
};
