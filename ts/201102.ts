interface sq {
  color?: string;
  width?: number;
  
}

function createSquare(config: sq): { color: string; area: number }:void {
  // ...

}
let squareOptions = { colour: "red", width: 100 };
let mysq = createSquare(squareOptions);


interface SearchFunc {
  (source: string, subString: string): boolean;
}

interface S {
  [index:string]:string;
}

