/* _____________ 여기에 코드 입력 _____________ */

type HelloWorld = string; // expected to be a string

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect, NotAny } from "@type-challenges/utils";

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
