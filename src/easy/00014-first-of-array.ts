/* _____________ 여기에 코드 입력 _____________ */

type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = "0" extends keyof T ? T[0] : never;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
];

// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.ko.md
