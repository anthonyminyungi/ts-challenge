/* _____________ 여기에 코드 입력 _____________ */
type Tuple = readonly unknown[];

type Concat<T extends Tuple, U extends Tuple> = [...T, ...U];

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const tuple = [1] as const;

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >
];

// @ts-expect-error
type error = Concat<null, undefined>;

// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.ko.md
