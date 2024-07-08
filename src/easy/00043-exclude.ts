/* _____________ 여기에 코드 입력 _____________ */

type MyExclude<T, U> = T extends U ? never : T;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];

// 문제: https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.ko.md

/**
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 * 제네릭 타입 여부에 따라 조건부 타입이 다르게 동작한다.
 */
