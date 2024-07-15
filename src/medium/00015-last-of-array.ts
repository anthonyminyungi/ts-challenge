/* _____________ 여기에 코드 입력 _____________ */

type Last<T extends unknown[]> = T extends [...infer _, infer L] ? L : never;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
type A = Last<[3, 2, 1]>;
