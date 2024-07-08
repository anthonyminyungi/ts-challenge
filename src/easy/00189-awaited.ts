/* _____________ 여기에 코드 입력 _____________ */

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;

/**
 type Thenable<T> = {
  then:(onfulfilled: (arg: T) => any) => any;
};
type PromiseLike<T> = Promise<T> | Thenable<T>;
type MyAwaited2<T> = T extends PromiseLike<infer U> ? MyAwaited2<U> : T;
type MyAwaited<T extends PromiseLike<any>> = MyAwaited2<T>;
 */

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,

  // @ts-expect-error
  MyAwaited<number>
];

// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.ko.md
