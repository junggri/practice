interface sq {
  color?: string;
  width?: number;
}

let squareOptions = { colour: "red", width: 100 };
let mysq = createSquare(squareOptions);

interface SearchFunc {
  (source: string, subString: string): boolean;
}

interface S {
  [index: string]: string;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
console.log(identity);

function a() {
  return 1;
}

let b = a;
