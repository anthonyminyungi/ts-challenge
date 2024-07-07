/* _____________ 여기에 코드 입력 _____________ */

type MyReadonly<T extends object> = {
  readonly [K in keyof T]: T[K];
};

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
