/* _____________ 여기에 코드 입력 _____________ */

type IsEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U
  ? 1
  : 2
  ? true
  : false;

type Includes<T extends readonly unknown[], U> = T extends [infer F, ...infer R]
  ? IsEqual<F, U> extends true
    ? true
    : Includes<R, U>
  : false;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">, true>
  >,
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: "A" }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: "A" }], { readonly a: "A" }>, false>>,
  Expect<Equal<Includes<[{ readonly a: "A" }], { a: "A" }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>
];

// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.ko.md
