/* _____________ 여기에 코드 입력 _____________ */

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof Pick<T, K>]: T[P];
} & Omit<T, K>;

/* _____________ 테스트 케이스 _____________ */
import type { Alike, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "description">, Expected>>
];

type A = MyReadonly2<Todo2, "title" | "description">;

// @ts-expect-error
type error = MyReadonly2<Todo1, "title" | "invalid">;

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.ko.md
