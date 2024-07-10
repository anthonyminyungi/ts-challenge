/* _____________ 여기에 코드 입력 _____________ */

type MyParameters<T> = T extends (...args: infer P) => unknown ? P : never;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

function foo(arg1: string, arg2: number): void {}
function bar(arg1: boolean, arg2: { a: "A" }): void {}
function baz(): void {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];

// https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.ko.md
